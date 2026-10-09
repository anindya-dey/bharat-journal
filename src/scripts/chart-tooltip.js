// Shared hover-tooltip behavior for [data-chart] elements.
// - x positions are computed from the real data (timestamps for lines,
//   band centers for bars) so the guide/dot always sit on the data.
// - the pointer snaps to the nearest actual data point, so a yearly
//   series steps year-by-year and a 5-year series steps in 5s.

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
  var color = el.dataset.color || "#e07b1a";
  var W = Number(el.dataset.w) || 860;
  var H = Number(el.dataset.h) || 400;
  var PL = Number(el.dataset.padl) || 64;
  var PR = Number(el.dataset.padr) || 28;
  var PT = Number(el.dataset.padt) || 24;
  var PB = Number(el.dataset.padb) || 36;
  var n = tips.length;
  var inner = W - PL - PR;

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
  dot.setAttribute("stroke", "#fff");
  dot.setAttribute("stroke-width", "2.5");
  dot.setAttribute("opacity", "0");
  dot.style.pointerEvents = "none";
  svg.appendChild(dot);

  // ---- x position per data point (plot coordinates) ----
  var t0, tN;
  if (!isBar) {
    t0 = tips[0].t;
    tN = tips[n - 1].t;
  }
  function xOf(i) {
    if (isBar) {
      var band = inner / n;
      return PL + band * (i + 0.5);
    }
    var span = tN - t0 || 1;
    return PL + inner * ((tips[i].t - t0) / span);
  }
  function yOf(f) {
    return PT + (H - PT - PB) * (1 - f);
  }

  // Cap long decimals to at most 2 places
  function clean(v) {
    return String(v).replace(/(\d+\.\d{3,})/g, function (m) {
      return Number(m).toFixed(2);
    });
  }

  function show(i, clientX, clientY) {
    var t = tips[i];
    tip.innerHTML =
      (title
        ? '<div class="tip-title">' + clean(title) + "</div>"
        : "") +
      '<div class="tip-value">' +
      clean(t.value) +
      "</div>" +
      '<div class="tip-label">' +
      clean(t.label) +
      "</div>";
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
      var d = Math.abs(xOf(i) - px);
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
    if (px < PL - 20 || px > W - PR + 20) {
      hide();
      return;
    }
    var i = nearestIndex(px);
    var cx = xOf(i);
    var cy = yOf(tips[i].f != null ? tips[i].f : 0.5);
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
