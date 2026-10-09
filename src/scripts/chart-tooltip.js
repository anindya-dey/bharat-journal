// Shared hover-tooltip behavior for [data-chart] elements.
//
// Positions are read directly from the rendered SVG marks (circles for
// line charts, rects for bar charts), so the guide line and highlight
// dot always sit exactly on the plotted data — which itself aligns with
// the x-axis. The pointer snaps to the nearest actual data point.

function initChart(el) {
  if (el.dataset.tipInit) return;
  el.dataset.tipInit = "1";

  var svg = el.querySelector("svg");
  var tip = el.querySelector(".chart-tip");
  if (!svg || !tip) return;

  var isBar = el.hasAttribute("data-bar");
  var tips = [];
  try {
    tips = JSON.parse(el.dataset.tips || "[]");
  } catch (e) {
    return;
  }
  if (tips.length === 0) return;

  var title = el.dataset.title || "";
  var color = el.dataset.color || "#ea580c";

  function num(v, fallback) {
    return v !== undefined && v !== "" ? Number(v) : fallback;
  }
  var W = num(el.dataset.w, 860);
  var H = num(el.dataset.h, 400);
  var PL = num(el.dataset.padl, 64);
  var PR = num(el.dataset.padr, 28);
  var PT = num(el.dataset.padt, 24);
  var PB = num(el.dataset.padb, 36);
  var n = tips.length;

  // ---- Read exact mark positions from the SVG ----
  var marks = [];
  var nodes = svg.querySelectorAll(isBar ? "rect" : "circle");
  Array.prototype.forEach.call(nodes, function (node) {
    if (isBar) {
      var x = parseFloat(node.getAttribute("x"));
      var w = parseFloat(node.getAttribute("width"));
      var y = parseFloat(node.getAttribute("y"));
      marks.push({ x: x + w / 2, y: y });
    } else {
      marks.push({
        x: parseFloat(node.getAttribute("cx")),
        y: parseFloat(node.getAttribute("cy")),
      });
    }
  });
  var useMarks = marks.length === n;

  // ---- Fallback mapping (if marks are unavailable) ----
  var t0, tN;
  if (!isBar) {
    t0 = tips[0].t;
    tN = tips[n - 1].t;
  }
  function xOf(i) {
    if (isBar) return PL + ((W - PL - PR) / n) * (i + 0.5);
    return PL + (W - PL - PR) * ((tips[i].t - t0) / (tN - t0 || 1));
  }
  function yOf(f) {
    return PT + (H - PT - PB) * (1 - f);
  }

  var NS = "http://www.w3.org/2000/svg";
  var guide = document.createElementNS(NS, "line");
  guide.setAttribute("stroke", color);
  guide.setAttribute("stroke-width", "1.5");
  guide.setAttribute("stroke-dasharray", "3 4");
  guide.setAttribute("opacity", "0");
  guide.style.pointerEvents = "none";
  svg.appendChild(guide);

  var dot = document.createElementNS(NS, "circle");
  dot.setAttribute("r", "5.5");
  dot.setAttribute("fill", color);
  dot.setAttribute("stroke", "var(--color-paper)");
  dot.setAttribute("stroke-width", "2.5");
  dot.setAttribute("opacity", "0");
  dot.style.pointerEvents = "none";
  svg.appendChild(dot);

  function clean(v) {
    return String(v).replace(/(\d+\.\d{3,})/g, function (m) {
      return Number(m).toFixed(2);
    });
  }

  function show(i, clientX, clientY) {
    var t = tips[i];
    tip.innerHTML =
      (title ? '<div class="tip-title">' + clean(title) + "</div>" : "") +
      '<div class="tip-value">' + clean(t.value) + "</div>" +
      '<div class="tip-label">' + clean(t.label) + "</div>";
    tip.classList.add("is-visible");
    var host = el.getBoundingClientRect();
    var tw = tip.offsetWidth || 140;
    var tx = clientX - host.left + 16;
    var ty = clientY - host.top - 12;
    if (tx + tw > host.width) tx = clientX - host.left - tw - 16;
    if (tx < 0) tx = 0;
    if (ty < 0) ty = 0;
    tip.style.left = tx + "px";
    tip.style.top = ty + "px";
  }

  function hide() {
    tip.classList.remove("is-visible");
    dot.setAttribute("opacity", "0");
    guide.setAttribute("opacity", "0");
  }

  function nearestIndex(px) {
    var best = 0;
    var bestd = Infinity;
    for (var i = 0; i < n; i++) {
      var mx = useMarks ? marks[i].x : xOf(i);
      var d = Math.abs(mx - px);
      if (d < bestd) {
        bestd = d;
        best = i;
      }
    }
    return best;
  }

  function handler(e) {
    var rect = svg.getBoundingClientRect();
    var px = ((e.clientX - rect.left) / rect.width) * W;
    var i = nearestIndex(px);
    var cx = useMarks ? marks[i].x : xOf(i);
    var cy = useMarks ? marks[i].y : yOf(tips[i].f != null ? tips[i].f : 0.5);
    if (!isBar) {
      guide.setAttribute("x1", cx);
      guide.setAttribute("x2", cx);
      guide.setAttribute("y1", PT);
      guide.setAttribute("y2", H - PB);
      guide.setAttribute("opacity", "0.55");
    } else {
      guide.setAttribute("opacity", "0");
    }
    dot.setAttribute("cx", cx);
    dot.setAttribute("cy", cy);
    dot.setAttribute("opacity", "1");
    show(i, e.clientX, e.clientY);
  }

  el.addEventListener("mousemove", handler);
  el.addEventListener("mouseleave", hide);
}

function initAll() {
  document.querySelectorAll("[data-chart]").forEach(initChart);
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAll);
} else {
  initAll();
}
