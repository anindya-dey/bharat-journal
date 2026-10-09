
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
    var color = el.dataset.color || "#e07b1a";
    if (tips.length === 0) return;

    var W = Number(el.dataset.w) || 860;
    var H = Number(el.dataset.h) || 400;
    var PL = Number(el.dataset.padl) || 64;
    var PR = Number(el.dataset.padr) || 28;
    var PT = Number(el.dataset.padt) || 24;
    var PB = Number(el.dataset.padb) || 36;

    var NS = "http://www.w3.org/2000/svg";
    var guide = document.createElementNS(NS, "line");
    guide.setAttribute("stroke", color);
    guide.setAttribute("stroke-width", "1.5");
    guide.setAttribute("stroke-dasharray", "3 4");
    guide.setAttribute("opacity", "0");
    guide.style.pointerEvents = "none";
    svg.appendChild(guide);

    var dot = document.createElementNS(NS, "circle");
    dot.setAttribute("r", "5");
    dot.setAttribute("fill", color);
    dot.setAttribute("stroke", "#fff");
    dot.setAttribute("stroke-width", "2");
    dot.setAttribute("opacity", "0");
    dot.style.pointerEvents = "none";
    svg.appendChild(dot);

  var n = tips.length;

  // Cap any long decimal run to at most 2 places (e.g. 41.18333 → 41.18)
  function clean(v) {
    return String(v).replace(/(\d+\.\d{3,})/g, function (m) {
      return Number(m).toFixed(2);
    });
  }

  function show(idx, clientX, clientY) {
    var t = tips[idx];
    if (!t) return;
    var label = t.label || "";
    var value = clean(t.value);
      tip.innerHTML =
        '<span style="opacity:.65">' + label + "</span><br><b>" + value + "</b>";
      tip.classList.remove("hidden");
      var host = el.getBoundingClientRect();
      var tx = clientX - host.left + 14;
      var ty = clientY - host.top - 34;
      var maxL = host.width - 130;
      if (tx > maxL) tx = maxL;
      if (ty < 6) ty = 6;
      tip.style.left = tx + "px";
      tip.style.top = ty + "px";
    }

    function hide() {
      tip.classList.add("hidden");
      dot.setAttribute("opacity", "0");
      guide.setAttribute("opacity", "0");
    }

    if (isBar) {
      var band = (W - PL - PR) / n;
      var handler = function (e) {
        var rect = svg.getBoundingClientRect();
        var px = ((e.clientX - rect.left) / rect.width) * W;
        var idx = Math.floor((px - PL) / band);
        if (idx < 0 || idx >= n) {
          hide();
          return;
        }
        var cx = PL + band * (idx + 0.5);
        var t = tips[idx];
        var f = t.f != null ? t.f : 0.5;
        var cy = PT + (H - PT - PB) * (1 - f);
        dot.setAttribute("cx", cx);
        dot.setAttribute("cy", cy);
        dot.setAttribute("opacity", "0.95");
        guide.setAttribute("opacity", "0");
        show(idx, e.clientX, e.clientY);
      };
      el.addEventListener("mousemove", handler);
      el.addEventListener("mouseleave", hide);
    } else {
      var inner = W - PL - PR;
      var handler2 = function (e) {
        var rect = svg.getBoundingClientRect();
        var px = ((e.clientX - rect.left) / rect.width) * W;
        var raw = (px - PL) / inner;
        if (raw < -0.05 || raw > 1.05) {
          hide();
          return;
        }
        var idx = Math.max(0, Math.min(n - 1, Math.round(raw * (n - 1))));
        var frac = n > 1 ? idx / (n - 1) : 0.5;
        var cx = PL + inner * frac;
        var t = tips[idx];
        var f = t.f != null ? t.f : 0.5;
        var cy = PT + (H - PT - PB) * (1 - f);
        guide.setAttribute("x1", cx);
        guide.setAttribute("x2", cx);
        guide.setAttribute("y1", PT);
        guide.setAttribute("y2", H - PB);
        guide.setAttribute("opacity", "0.5");
        dot.setAttribute("cx", cx);
        dot.setAttribute("cy", cy);
        dot.setAttribute("opacity", "0.95");
        show(idx, e.clientX, e.clientY);
      };
      el.addEventListener("mousemove", handler2);
      el.addEventListener("mouseleave", hide);
    }
  }

  function initAll() {
    document.querySelectorAll("[data-chart]").forEach(initChart);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll);
  } else {
    initAll();
  }
