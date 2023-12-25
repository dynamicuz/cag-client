const header = {
   header: {
      offices: "Offices",
      coworking: "Openspace",
      meetingroom: "meeting rooms",
      blogs: "blogs",
      company: "company",
      contact: "Contact Us",
   },

   footer: {
      partners: "Partners",
      meetingrooms: "Meeting Rooms",
      advantages: "Advantages",
      eventzones: "Event zones",
      visitus: "Visit Us",
      reviews: "Reviews",
   },

   home: {
      intro: {
         elevate: "Elevate",
         title: (text) => `${text} Your Work Environment`,
         subtitle:
            "Discover a vibrant coworking community designed for productivity, collaboration, and success",
         btn: "Explore Our Spaces",
         trusted: "Trusted by",
      },
      metting: {
         summary: "Elevate Your Meetings",
         capacity: (num) => `Capacity ${num} people`,
      },

      events: {
         summary: "Crafting Moments",
         capacity: (num) => `Capacity ${num} people`,
      },

      advantages: {
         title: "Discover the Advantages of Choosing Our Co-Working Space",
         subtitle: "Why Choose Us? Your Path to Success Starts Here",

         cards: [
            {
               title: "Flexible Workspaces",
               subtitle:
                  "Adapt to your ever-changing needs with our flexible workspaces",
            },
            {
               title: "Prime Locations",
               subtitle:
                  "Choose from our strategically located spaces, situated in the heart of thriving business districts",
            },

            {
               title: "Community Networking",
               subtitle:
                  "Our workshops and social gatherings create opportunities for networking and collaboration",
            },

            {
               title: "State-of-the-Art Amenities",
               subtitle:
                  "Experience a workspace equipped with modern amenities to enhance your productivity",
            },

            {
               title: "Event Spaces",
               subtitle:
                  "Host your events, workshops, or team gatherings in our versatile event spaces",
            },

            {
               title: "Professional Atmosphere",
               subtitle:
                  "Immerse yourself in a professional yet welcoming atmosphere",
            },
         ],
      },

      form: {
         title: "Visit Us Today",
         subtitle:
            "Ready to elevate your workspace? Contact us for a tour or to discuss your workspace needs",
         submit: "Submit",
         name: "Your Name",
         phone: "Phone Number",
         ofice: "Ofice",
         coworking: "Co-working",
         meetingroom: "Meeting room",
      },

      journey: {
         summary: "Embark on a Journey",
         title: "Explore Our Co-Working Space in Motion",
         subtitle:
            "Get ready to experience the heartbeat of our co-working community. Dive into our overview video for a dynamic tour that unveils the essence of our inspiring workspace",
      },

      blog: {
         summary: "Explore Insights and Inspiration",
         title: "Dive into Our Co-Working Blog",
         subtitle:
            "Discover a treasure trove of articles designed to fuel your creativity, enhance your productivity, and keep you connected with the pulse of the co-working world",
      },
      review: {
         summary: "Testimonials",
         title: "What Our Members Say",
         subtitle:
            "Discover the experiences of professionals who have made Impact their workspace of choice",
      },
   },

   blogs: {
      title: "Explore Our Co-Working Chronicles",
      subtitle:
         "Our blog is your go-to resource for staying in the loop on industry trends, productivity hacks, member spotlights, and all things co-working",
   },

   meetingrooms: {
      title: "Unlock Our Dynamic Meeting Rooms",
      subtitle:
         "Our meeting rooms blend functionality with sophistication, providing the perfect setting for your professional endeavors",
      btn: "Leave a request",
      from: "from",
      seats: "How many seats?",
   },
   coworking: {
      title: "Your Co-Working Journey Starts Here",
      subtitle:
         "Our co-working environment is more than just shared desks; it's a community-driven ecosystem designed to elevate your work experience",
   },
   offices: {
      title: "Discover Our Exceptional Offices",
      subtitle:
         "Welcome to a workspace where ambition meets comfort. Our offices are meticulously designed to elevate your work experience, offering a sanctuary for focus, collaboration, and innovation",
   },
   contact: {
      summary: "Connect with Us",
      title: "Let's Start a Conversation",
      subtitle:
         "Your journey with us begins here. Whether you have questions, need assistance, or simply want to say hello, we're eager to hear from you. Reach out and let's build something great together",
      email: "Email",
      phone: "Phone",
      visit: "Visit Us",
      address: "Tashkent city, Yakkasaray district, Bogibuston Street",
   },
};

export default header;
