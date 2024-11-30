{\rtf1\ansi\ansicpg1252\cocoartf2820
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\froman\fcharset0 Times-Bold;\f1\froman\fcharset0 Times-Roman;\f2\fmodern\fcharset0 Courier;
}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;\red0\green0\blue233;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;\cssrgb\c0\c0\c93333;}
{\*\listtable{\list\listtemplateid1\listhybrid{\listlevel\levelnfc23\levelnfcn23\leveljc0\leveljcn0\levelfollow0\levelstartat1\levelspace360\levelindent0{\*\levelmarker \{disc\}}{\leveltext\leveltemplateid1\'01\uc0\u8226 ;}{\levelnumbers;}\fi-360\li720\lin720 }{\listlevel\levelnfc23\levelnfcn23\leveljc0\leveljcn0\levelfollow0\levelstartat1\levelspace360\levelindent0{\*\levelmarker \{circle\}}{\leveltext\leveltemplateid2\'01\uc0\u9702 ;}{\levelnumbers;}\fi-360\li1440\lin1440 }{\listname ;}\listid1}
{\list\listtemplateid2\listhybrid{\listlevel\levelnfc0\levelnfcn0\leveljc0\leveljcn0\levelfollow0\levelstartat1\levelspace360\levelindent0{\*\levelmarker \{decimal\}}{\leveltext\leveltemplateid101\'01\'00;}{\levelnumbers\'01;}\fi-360\li720\lin720 }{\listname ;}\listid2}
{\list\listtemplateid3\listhybrid{\listlevel\levelnfc0\levelnfcn0\leveljc0\leveljcn0\levelfollow0\levelstartat1\levelspace360\levelindent0{\*\levelmarker \{decimal\}}{\leveltext\leveltemplateid201\'01\'00;}{\levelnumbers\'01;}\fi-360\li720\lin720 }{\listname ;}\listid3}
{\list\listtemplateid4\listhybrid{\listlevel\levelnfc0\levelnfcn0\leveljc0\leveljcn0\levelfollow0\levelstartat1\levelspace360\levelindent0{\*\levelmarker \{decimal\}}{\leveltext\leveltemplateid301\'01\'00;}{\levelnumbers\'01;}\fi-360\li720\lin720 }{\listname ;}\listid4}
{\list\listtemplateid5\listhybrid{\listlevel\levelnfc23\levelnfcn23\leveljc0\leveljcn0\levelfollow0\levelstartat1\levelspace360\levelindent0{\*\levelmarker \{disc\}}{\leveltext\leveltemplateid401\'01\uc0\u8226 ;}{\levelnumbers;}\fi-360\li720\lin720 }{\listname ;}\listid5}}
{\*\listoverridetable{\listoverride\listid1\listoverridecount0\ls1}{\listoverride\listid2\listoverridecount0\ls2}{\listoverride\listid3\listoverridecount0\ls3}{\listoverride\listid4\listoverridecount0\ls4}{\listoverride\listid5\listoverridecount0\ls5}}
\margl1440\margr1440\vieww12720\viewh7800\viewkind0
\deftab720
\pard\pardeftab720\sa321\partightenfactor0

\f0\b\fs48 \cf0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 Bluesky NYC Events - README\
\pard\pardeftab720\sa298\partightenfactor0

\fs36 \cf0 Overview\
\pard\pardeftab720\sa240\partightenfactor0

\f1\b0\fs24 \cf0 Bluesky NYC Events is a project designed to display event data from Bluesky's API in an interactive and user-friendly way. It utilizes React for the front-end interface and Vitest for testing, with a robust integration of the Bluesky API to showcase data and events. This README will guide you through setting up the project, making API requests, and extending functionality.\
\pard\pardeftab720\sa298\partightenfactor0

\f0\b\fs36 \cf0 Project Structure\
\pard\pardeftab720\sa240\partightenfactor0

\f1\b0\fs24 \cf0 The main components of the project are organized as follows:\
\pard\tx220\tx720\pardeftab720\li720\fi-720\sa240\partightenfactor0
\ls1\ilvl0
\f0\b \cf0 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 src/
\f1\b0 : Contains all the source files for the application.\
\pard\tx940\tx1440\pardeftab720\li1440\fi-1440\sa240\partightenfactor0
\ls1\ilvl1
\f0\b \cf0 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\uc0\u9702 	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 hooks/
\f1\b0 : Custom hooks used for fetching Bluesky feed data.\
\ls1\ilvl1
\f0\b \kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\uc0\u9702 	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 components/
\f1\b0 : React components used for UI rendering.\
\ls1\ilvl1
\f0\b \kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\uc0\u9702 	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 App.jsx
\f1\b0 : Main application component.\
\ls1\ilvl1
\f0\b \kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\uc0\u9702 	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 App.test.js
\f1\b0 : Test suite for the main application.\
\ls1\ilvl1
\f0\b \kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\uc0\u9702 	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 SimpleRender.test.jsx
\f1\b0 : Simple rendering test to verify component integration.\
\pard\tx220\tx720\pardeftab720\li720\fi-720\sa240\partightenfactor0
\ls1\ilvl0
\f0\b \cf0 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 public/
\f1\b0 : Contains static files like images or icons.\
\ls1\ilvl0
\f0\b \kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 node_modules/
\f1\b0 : Dependencies installed via npm.\
\pard\pardeftab720\sa298\partightenfactor0

\f0\b\fs36 \cf0 Installation\
\pard\pardeftab720\sa240\partightenfactor0

\f1\b0\fs24 \cf0 To get started, clone the repository and install the dependencies:\
\pard\pardeftab720\partightenfactor0

\f2\fs26 \cf0 # Clone the repository\
git clone https://github.com/Mediaeater/bluesky-nyc-events.git\
\
# Navigate into the project directory\
cd bluesky-nyc-events\
\
# Install dependencies\
npm install\
\pard\pardeftab720\sa298\partightenfactor0

\f0\b\fs36 \cf0 Running the Project\
\pard\pardeftab720\sa240\partightenfactor0

\f1\b0\fs24 \cf0 To start the development server, use the following command:\
\pard\pardeftab720\partightenfactor0

\f2\fs26 \cf0 npm start\
\pard\pardeftab720\sa240\partightenfactor0

\f1\fs24 \cf0 This will start a development server running at 
\f2\fs26 http://localhost:3000
\f1\fs24 , where you can view the application in your browser.\
\pard\pardeftab720\sa298\partightenfactor0

\f0\b\fs36 \cf0 Testing\
\pard\pardeftab720\sa240\partightenfactor0

\f1\b0\fs24 \cf0 We use 
\f2\fs26 vitest
\f1\fs24  to run tests on this project. Tests are located in the 
\f2\fs26 src/
\f1\fs24  directory alongside the components they test.\
To run the tests, use the following command:\
\pard\pardeftab720\partightenfactor0

\f2\fs26 \cf0 npm test\
\pard\pardeftab720\sa240\partightenfactor0

\f1\fs24 \cf0 Vitest will automatically detect changes and re-run the tests, ensuring your project remains stable during development.\
\pard\pardeftab720\sa298\partightenfactor0

\f0\b\fs36 \cf0 Making API Requests to Bluesky\
\pard\pardeftab720\sa240\partightenfactor0

\f1\b0\fs24 \cf0 The 
\f2\fs26 useBlueskyFeed
\f1\fs24  custom hook allows you to interact with Bluesky's API to fetch event data and display it within the application.\
\pard\pardeftab720\sa280\partightenfactor0

\f0\b\fs28 \cf0 Example Usage\
\pard\pardeftab720\sa240\partightenfactor0

\f1\b0\fs24 \cf0 To fetch and display data from Bluesky's API:\
\pard\tx220\tx720\pardeftab720\li720\fi-720\sa240\partightenfactor0
\ls2\ilvl0\cf0 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	1	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 Import the 
\f2\fs26 useBlueskyFeed
\f1\fs24  hook:\uc0\u8232 
\f2\fs26 import \{ useBlueskyFeed \} from './hooks/useBluesky';
\f1\fs24 \
\ls2\ilvl0\kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	2	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 Utilize it inside a component:\uc0\u8232 
\f2\fs26 const MyComponent = () => \{\
\pard\tx220\tx720\pardeftab720\li720\fi-720\partightenfactor0
\ls2\ilvl0\cf0 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	3	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2   const \{ loading, posts, error \} = useBlueskyFeed([\{ name: 'example', query: 'test' \}]);\
\ls2\ilvl0\kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	4	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 \
\ls2\ilvl0\kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	5	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2   if (loading) return <div>Loading...</div>;\
\ls2\ilvl0\kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	6	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2   if (error) return <div>Error: \{error\}</div>;\
\ls2\ilvl0\kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	7	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2   return (\
\ls2\ilvl0\kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	8	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2     <div>\
\ls2\ilvl0\kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	9	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2       \{posts.map(post => (\
\ls2\ilvl0\kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	10	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2         <div key=\{post.id\}>\{post.content\}</div>\
\ls2\ilvl0\kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	11	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2       ))\}\
\ls2\ilvl0\kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	12	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2     </div>\
\ls2\ilvl0\kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	13	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2   );\
\ls2\ilvl0\kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	14	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 \};
\f1\fs24 \
\pard\pardeftab720\sa280\partightenfactor0

\f0\b\fs28 \cf0 API Configuration\
\pard\pardeftab720\sa240\partightenfactor0

\f1\b0\fs24 \cf0 The Bluesky API requires authentication. Ensure you have the correct credentials and token before attempting to make API requests. The token can be generated using the Bluesky Developer documentation at {\field{\*\fldinst{HYPERLINK "https://docs.bsky.app/"}}{\fldrslt \cf3 \ul \ulc3 \strokec3 Bluesky API Documentation}}.\
Update your environment variables as needed in the 
\f2\fs26 .env
\f1\fs24  file:\
\pard\pardeftab720\partightenfactor0

\f2\fs26 \cf0 API_TOKEN=YOUR_BSKY_API_TOKEN\
\pard\pardeftab720\sa298\partightenfactor0

\f0\b\fs36 \cf0 Vite Configuration\
\pard\pardeftab720\sa240\partightenfactor0

\f1\b0\fs24 \cf0 To ensure the correct handling of server-side rendering, you need to add the following to your 
\f2\fs26 vite.config.js
\f1\fs24  file:\
\pard\pardeftab720\partightenfactor0

\f2\fs26 \cf0 export default \{\
  ssr: \{\
    noExternal: true,\
  \},\
\};\
\pard\pardeftab720\sa240\partightenfactor0

\f1\fs24 \cf0 This helps to prevent external dependencies from being bundled incorrectly when using SSR.\
\pard\pardeftab720\sa298\partightenfactor0

\f0\b\fs36 \cf0 Deployment\
\pard\tx220\tx720\pardeftab720\li720\fi-720\sa240\partightenfactor0
\ls3\ilvl0
\fs24 \cf0 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	1	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 Build the Project
\f1\b0 :\uc0\u8232 
\f2\fs26 npm run build\uc0\u8232 
\f1\fs24 This will create a production build in the 
\f2\fs26 dist/
\f1\fs24  folder.\
\ls3\ilvl0
\f0\b \kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	2	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 Deploy to Your Favorite Hosting Provider
\f1\b0  (e.g., Netlify, Vercel, AWS S3).\
\pard\pardeftab720\sa298\partightenfactor0

\f0\b\fs36 \cf0 Git Workflow\
\pard\pardeftab720\sa240\partightenfactor0

\f1\b0\fs24 \cf0 Make sure to commit and push changes after verification:\
\pard\pardeftab720\partightenfactor0

\f2\fs26 \cf0 git add .\
git commit -m "Your commit message"\
git push origin master\
\pard\pardeftab720\sa298\partightenfactor0

\f0\b\fs36 \cf0 Contribution Guidelines\
\pard\pardeftab720\sa240\partightenfactor0

\f1\b0\fs24 \cf0 We welcome contributions from the community! To contribute:\
\pard\tx220\tx720\pardeftab720\li720\fi-720\sa240\partightenfactor0
\ls4\ilvl0\cf0 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	1	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 Fork the repository on GitHub.\
\ls4\ilvl0\kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	2	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 Create a new branch for your feature or fix.\
\ls4\ilvl0\kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	3	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 Commit your changes.\
\ls4\ilvl0\kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	4	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 Push to your fork and create a pull request.\
\pard\pardeftab720\sa298\partightenfactor0

\f0\b\fs36 \cf0 Troubleshooting\
\pard\pardeftab720\sa240\partightenfactor0

\f1\b0\fs24 \cf0 If you run into issues while running the tests or making API calls, try the following steps:\
\pard\tx220\tx720\pardeftab720\li720\fi-720\sa240\partightenfactor0
\ls5\ilvl0\cf0 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 Make sure that your environment variables (
\f2\fs26 API_TOKEN
\f1\fs24 ) are set correctly.\
\ls5\ilvl0\kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 Ensure you are in the correct working directory (
\f2\fs26 /Users/imac/Desktop/bluesky-nyc-events
\f1\fs24 ).\
\ls5\ilvl0\kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 Check the console or terminal for specific error messages, which often give clues to resolving issues.\
\pard\pardeftab720\sa298\partightenfactor0

\f0\b\fs36 \cf0 License\
\pard\pardeftab720\sa240\partightenfactor0

\f1\b0\fs24 \cf0 This project is licensed under the MIT License. Feel free to use, modify, and distribute this software as you wish.\
\pard\pardeftab720\sa298\partightenfactor0

\f0\b\fs36 \cf0 Contact\
\pard\pardeftab720\sa240\partightenfactor0

\f1\b0\fs24 \cf0 If you have questions, please contact {\field{\*\fldinst{HYPERLINK "https://github.com/Mediaeater"}}{\fldrslt \cf3 \ul \ulc3 \strokec3 Mediaeater}}.\
\pard\pardeftab720\sa280\partightenfactor0

\f0\b\fs28 \cf0 DISPUTE THE TEXT\
Happy coding! \uc0\u55357 \u56960  \
\pard\pardeftab720\sa240\partightenfactor0

\f1\b0\fs24 \cf0 \
}