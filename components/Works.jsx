const Works = () => {
  //   Variables
  const clientProjects = [
    {
      id: 1,
      title: "Payment2 App Prototype",
      desc: "Payment2 is simple payment app prototype. Where you can create an account and send money via QR code to others. This app have Authentication, Authorization, SSE (Server Sent Event for notification), QR code genrator, QR code reader and many more things.",
      imgSrc: "/payment.png",
      stacks: [
        "HTML",
        "Css",
        "Scss",
        "Javascript",
        "Vue.js",
        "Node.js",
        "Express.js",
        "Sqlite",
        ,
      ],
    },
    {
      id: 2,
      title: "Chess Gui",
      desc: "Chess Gui is turn-based strategy chess game. Where you can play games agains chess engine like Stock-fish. This app have easy to use user interface with modern UI design. Currently this app is in a development process and more features are plan for future.",
      imgSrc: "/chess.png",
      stacks: [
        "HTML",
        "Css",
        "Scss",
        "Javascript",
        "Vue.js",
        "Node.js",
        "Electron.js",
        "Sqlite",
        ,
      ],
    },
    {
      id: 3,
      title: "Tasks",
      desc: "This Tasks app is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom. It is helpful in planning our daily schedules.  ",
      imgSrc: "/todo.png",
      stacks: ["HTML", "Css", "Scss", "Javascript", "Vue.js", "IndexedDb"],
    },
  ];
  return (
    <div id="work" className="works">
      <h1 className="title">work</h1>
      <div className="showcase">
        {clientProjects.map((item) => (
          <div className="card" key={item.id}>
            <h1 className="card-title">{item.title}</h1>
            <p className="desc">{item.desc}</p>
            <ul className="stacks">
              {item.stacks.map((innerItem, index) => (
                <li className="stack" key={index}>
                  {innerItem}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
