/**
 * 根頁面：Netlify 的 redirects 會在伺服器端處理跳轉到 /zh/。
 * 這個頁面是 fallback，萬一 redirect 沒觸發時讓使用者能手動點。
 */
export default function RootPage() {
  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", paddingTop: "60px" }}>
      <p>正在開啟網站…</p>
      <p>
        <a href="/zh/" style={{ color: "#E8590C", fontWeight: "bold" }}>
          點此進入中文版
        </a>
        {" | "}
        <a href="/en/" style={{ color: "#2B3A4A", fontWeight: "bold" }}>
          English Version
        </a>
      </p>
    </div>
  );
}
