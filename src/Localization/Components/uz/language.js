const header = {
   header: {
      offices: "Ofislar",
      coworking: "hamkorlik",
      meetingroom: "majlis xonalari",
      blogs: "bloglar",
      company: "kompaniya",
      contact: "Kontakt",
   },

   footer: {
      partners: "Hamkorlar",
      meetingrooms: "Yig'ilish Xonalari",
      advantages: "Afzalliklar",
      eventzones: "Tadbir Zonalari",
      visitus: "Bizga Tashrif Buyuring",
      reviews: "Sharhlar",
   },

   home: {
      intro: {
         elevate: "Yaxshilang",
         title: (text) => ` Ish Muhitingizni  ${text}`,
         subtitle:
            "Mahsuldorlik, hamkorlik va muvaffaqiyat uchun mo'ljallangan jonli hamkorlik jamoasini kashf eting",
         btn: "Bizning Joylarimizni Kuzatib Boring",
         trusted: "Ishonch bildirgan",
      },
      metting: {
         summary: "Uchrashuvlaringizni Yuksaltirish",
         capacity: (num) => `Sig'imi ${num} kishi`,

         card: {
            title: "Muvaffaqiyat uchun Mo'ljallangan Joylar",
            subtitle:
               "Biznes muhokamalaringizni muhim qadamlarga aylantiring. Bizning yig'ilish xonalarimiz hamkorlik, innovatsiya va muvaffaqiyat uchun ideal fonni ta'minlash uchun diqqat bilan yaratilgan",
         },
      },

      events: {
         summary: "Lahzalarni Yaratish",
         capacity: (num) => `Sig'imi ${num} kishi`,

         card: {
            title: "Muvaffaqiyat uchun Mo'ljallangan Joylar",
            subtitle:
               "Biznes muhokamalaringizni muhim qadamlarga aylantiring. Bizning yig'ilish xonalarimiz hamkorlik, innovatsiya va muvaffaqiyat uchun ideal fonni ta'minlash uchun diqqat bilan yaratilgan",
         },
      },

      advantages: {
         title: "Bizning Hamkorlik Joyimizni Tanlashning Afzalliklarini Kuzatib Boring",
         subtitle:
            "Nega Bizni Tanlash Kerak? Muvaffaqiyat Yo'lingiz Shu Yerdan Boshlanadi",

         cards: [
            {
               title: "Moslashuvchan Ish Joylari",
               subtitle:
                  "Bizning moslashuvchan ish joylarimiz bilan doimiy o'zgaruvchan ehtiyojlaringizga mos kelish",
            },
            {
               title: "Asosiy Joylashuvlar",
               subtitle:
                  "Biznes markazlarining yuragida joylashgan joylarimizdan birini tanlang",
            },

            {
               title: "Hamjamiyat Tarmog'i",
               subtitle:
                  "Bizning seminarlarimiz va ijtimoiy yig'ilishlarimiz tarmoqlanish va hamkorlik uchun imkoniyatlar yaratadi",
            },

            {
               title: "Zamonaviy Qulayliklar",
               subtitle:
                  "Mahsuldorligingizni oshirish uchun zamonaviy qulayliklar bilan jihozlangan ish joyini tajriba qiling",
            },

            {
               title: "Tadbir Joylari",
               subtitle:
                  "Bizning ko'p taraflama tadbir joylarimizda tadbirlaringizni, seminarlar yoki jamoa yig'ilishlarini o'tkazing",
            },

            {
               title: "Professional Muhit",
               subtitle:
                  "Professional, ammo qabul qiluvchi muhitda o'zingizni singdiring",
            },
         ],
      },

      form: {
         title: "Bugun Bizga Tashrif Buyuring",
         subtitle:
            "Ish joyingizni yükseltirishga tayyormisiz? Tur yoki ish joyingiz ehtiyojlari haqida muhokama qilish uchun biz bilan bog'laning",
         submit: "Yuborish",
         name: "Ismingiz",
         phone: "Telefon Raqami",
         ofice: "Ofis",
         coworking: "Hamkorlik",
         meetingroom: "Yig'ilish xonasi",
      },

      journey: {
         summary: "Safarga Chiqish",
         title: "Bizning Hamkorlik Joyimizni Harakatda Kuzatib Boring",
         subtitle:
            "Bizning hamkorlik jamoamizning yuragi bo'lgan ish joyimizni tajriba qilishga tayyorlaning. Bizning ilhomlantiruvchi ish joyimizning mohiyatini ochib beradigan dinamik sayohat videomizga sho'ng'ing",
      },

      blog: {
         summary: "Fikrlar va Ilhomni Kuzatib Boring",
         title: "Bizning Hamkorlik Blogimizga Sho'ng'ing",
         subtitle:
            "Ijodiyatingizni yoqish, mahsuldorligingizni oshirish va hamkorlik dunyosining urug'ida aloqada qolish uchun mo'ljallangan maqolalar xazinasini kashf eting",
      },
      review: {
         summary: "Testimoniallar",
         title: "A'zolarimiz Nima Deyishadi",
         subtitle:
            "Impactni o'z ish joyi sifatida tanlagan mutaxassislar tajribalarini kashf eting",
      },
   },

   blogs: {
      title: "Hamkorlik Xronikalarimizni Kuzatib Boring",
      subtitle:
         "Bizning blogimiz sanoat tendentsiyalari, samaradorlik bo'yicha maslahatlar, a'zolar diqqat markazida va hamkorlik haqida hamma narsalar bo'yicha asosiy manbaingiz hisoblanadi",
   },
   meetingrooms: {
      title: "Dinamik Yig'ilish Xonalarimizni Ochib Oling",
      subtitle:
         "Bizning yig'ilish xonalarimiz funksionallikni sofistikatsiya bilan birlashtirib, professional harakatlaringiz uchun mukammal sozlamani taqdim etadi",
      btn: "So'rov qoldiring",
      from: "dan",
      seats: "Nechta o'rindiqlar?",
   },
   coworking: {
      title: "Sizning Hamkorlik Sarguzashtingiz Shu Yerdan Boshlanadi",
      subtitle:
         "Bizning hamkorlik muhiti faqat umumiy stollar emas; bu sizning ish tajribangizni yuksaltirish uchun mo'ljallangan jamoa tomonidan boshqariladigan ekotizim hisoblanadi",
   },
   offices: {
      title: "Favqulodda Ofislarimizni Kuzatib Boring",
      subtitle:
         "Intilish va qulaylik uchrashadigan ish joyiga xush kelibsiz. Ofislarimiz sizning ish tajribangizni yuksaltirish uchun diqqat bilan loyihalashtirilgan, e'tibor, hamkorlik va innovatsiya uchun panoh taqdim etadi",
   },
   contact: {
      summary: "Biz bilan Bog'laning",
      title: "Suhbatni Boshlaylik",
      subtitle:
         "Biz bilan sarguzashtingiz shu yerdan boshlanadi. Savollaringiz bo'lsa, yordam kerak bo'lsa yoki shunchaki salom deyishni istasangiz, sizdan eshitishni intiqlik bilan kutamiz. Biz bilan bog'laning va birgalikda ajoyib narsalarni yarating",
      email: "Email",
      phone: "Telefon",
      visit: "Bizni Tashrif Buyuring",
      address: "Toshkent shahri, Yakkasaroy tumani, Bog'ibuston ko'chasi 186-uy",
   },
};

export default header;
