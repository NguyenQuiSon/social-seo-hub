const state = { likes: 128, shares: 47, comments: 23, reach: 1245, traffic: 186 };

const els = {
  likes: document.getElementById("likes"),
  shares: document.getElementById("shares"),
  comments: document.getElementById("comments"),
  reach: document.getElementById("reach"),
  traffic: document.getElementById("traffic"),
  ctr: document.getElementById("ctr"),
  heroTraffic: document.getElementById("heroTraffic"),
  chart: document.getElementById("chart"),
  message: document.getElementById("demoMessage")
};

function render() {
  els.likes.textContent = state.likes.toLocaleString("vi-VN");
  els.shares.textContent = state.shares.toLocaleString("vi-VN");
  els.comments.textContent = state.comments.toLocaleString("vi-VN");
  els.reach.textContent = state.reach.toLocaleString("vi-VN");
  els.traffic.textContent = state.traffic.toLocaleString("vi-VN");
  els.heroTraffic.textContent = state.traffic.toLocaleString("vi-VN");
  els.ctr.textContent = ((state.traffic / state.reach) * 100).toFixed(1) + "%";
}

document.querySelectorAll(".reaction").forEach(btn => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.type;
    state[type] += 1;
    if (type === "shares") {
      state.reach += 32;
      state.traffic += 5;
      els.message.textContent = "Share thành công! Nội dung được phân phối đến nhiều người hơn.";
    } else if (type === "likes") {
      state.reach += 8;
      els.traffic += 1;
      els.message.textContent = "Like tạo thêm một tín hiệu tương tác trong mô phỏng.";
    } else {
      state.reach += 15;
      state.traffic += 2;
      els.message.textContent = "Comment tạo thêm tương tác và khả năng tiếp cận.";
    }
    render();
  });
});

document.getElementById("shareBtn").addEventListener("click", () => {
  state.shares += 1;
  state.reach += 120;
  state.traffic += 18;
  state.likes += 3;
  state.comments += 2;
  const bars = [...els.chart.children];
  bars.forEach((bar, i) => {
    const base = 35 + i * 7;
    bar.style.height = Math.min(95, base + Math.random() * 10) + "%";
  });
  els.message.textContent = "🚀 Share đã tạo hiệu ứng lan truyền: Reach và Website Traffic tăng!";
  render();
});

document.getElementById("resetBtn").addEventListener("click", () => {
  Object.assign(state, {likes:128, shares:47, comments:23, reach:1245, traffic:186});
  [...els.chart.children].forEach((bar, i) => bar.style.height = [35,42,48,55,63,72,82][i] + "%");
  els.message.textContent = "Bấm SHARE để xem hiệu ứng lan truyền và traffic thay đổi theo thời gian.";
  render();
});

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".topbar nav");
menuBtn.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  nav.style.position = "absolute";
  nav.style.top = "74px";
  nav.style.left = "0";
  nav.style.right = "0";
  nav.style.padding = "20px";
  nav.style.background = "#fff";
  nav.style.flexDirection = "column";
  nav.style.boxShadow = "0 15px 30px rgba(0,0,0,.08)";
});

render();
