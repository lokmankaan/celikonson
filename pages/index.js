
import Head from "next/head";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    document.documentElement.lang = "tr";
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '960px', margin: '0 auto' }}>
      <Head>
        <title>Çelikon Yapı | Çelik Konstrüksiyon, Köprü, Depo ve Yapı</title>
        <meta name="description" content="Çelik konstrüksiyon, çelik köprü, çelik depo ve çelik yapı alanında uzman firma. Türkiye ve uluslararası projelerde deneyim." />
        <meta name="keywords" content="çelik konstrüksiyon, çelik köprü, çelik depo, çelik yapı, steel construction, steel bridge, steel warehouse, steel structure, estructura de acero, puente de acero, almacén de acero, construcción de acero, الإنشاءات الفولاذية, الجسر الفولاذي, مستودع فولاذي, الهيكل الصلب" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>Çelikon Yapı</h1>
      <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>Çelik Konstrüksiyon, Köprü, Depo ve Yapı Uzmanı</p>
      <hr style={{ margin: '2rem 0' }} />

      <section>
        <h2>Hakkımızda</h2>
        <p>Çelikon Yapı olarak, çelik yapı sektöründe yılların verdiği tecrübe ile yurt içi ve yurt dışında birçok başarılı projeye imza attık. Uzman mühendislik kadromuz, kalite standartlarımız ve zamanında teslimat prensibimizle sektörde öncü konumdayız.</p>
      </section>

      <section>
        <h2>Hizmetlerimiz</h2>
        <ul>
          <li><strong>Çelik Konstrüksiyon:</strong> Endüstriyel ve ticari yapılar için güçlü çözümler.</li>
          <li><strong>Çelik Köprüler:</strong> Yaya ve araç geçişi için güvenli sistemler.</li>
          <li><strong>Çelik Depolar:</strong> Depolama ihtiyaçlarınıza özel çözümler.</li>
          <li><strong>Çelik Yapılar:</strong> Sanayi, lojistik ve ticari yapılar için komple sistemler.</li>
        </ul>
      </section>

      <section>
        <h2>Projelerimiz</h2>
        <p>Örnek projelerimiz: Ankara Lojistik Merkezi, İzmir Yaya Köprüsü, İstanbul Fabrika Deposu, Tekirdağ Tarım Yapıları.</p>
      </section>

      <section>
        <h2>İletişim</h2>
        <p>Bizimle iletişime geçmek için info@celikonyapi.com adresine e-posta gönderebilir veya aşağıdaki formu doldurabilirsiniz:</p>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input type="text" placeholder="Adınız" required />
          <input type="email" placeholder="E-posta adresiniz" required />
          <textarea placeholder="Mesajınız" required />
          <button type="submit">Gönder</button>
        </form>
      </section>

      <footer style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.9rem', color: '#777' }}>
        © 2025 Çelikon Yapı. Tüm hakları saklıdır.
      </footer>
    </div>
  );
}
