import { useState , useEffect } from "react";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState(() => {
    return Number(localStorage.getItem("activeTab")) || 1;
  });
useEffect(()=>{
    localStorage.setItem("activeTab" , activeTab)
},[activeTab])
  const tabs = [
    { id: 1, title: "Tab 1" },
    { id: 2, title: "Tab 2" },
    { id: 3, title: "Tab 3" },
    { id: 4, title: "Tab 4" },
  ];
  const tabContents = [
    {
      id: 1,
      title: "Content 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima architecto sed repellat error vel dignissimos, dolores molestiae maxime ipsum fuga sunt ipsa facere excepturi corporis inventore eos quod nostrum. Culpa?",
    },
    {
      id: 2,
      title: "Content 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima architecto sed repellat error vel dignissimos, dolores molestiae maxime ipsum fuga sunt ipsa facere excepturi corporis inventore eos quod nostrum. Culpa?",
    },
    {
      id: 3,
      title: "Content 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima architecto sed repellat error vel dignissimos, dolores molestiae maxime ipsum fuga sunt ipsa facere excepturi corporis inventore eos quod nostrum. Culpa?",
    },
    {
      id: 4,
      title: "Content 4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima architecto sed repellat error vel dignissimos, dolores molestiae maxime ipsum fuga sunt ipsa facere excepturi corporis inventore eos quod nostrum. Culpa?",
    },
  ];
  const activeContent = tabContents.find((item) => item.id === activeTab);
  return (
    <>
      <div className="tabs-container">
        <h2>Tabs Component with React</h2>
        <div className="tabs-header">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={activeTab === tab.id ? "active" : ""}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="tabs-content">
          {}
          <h3>{activeContent.title}</h3>
          <p>{activeContent.description}</p>
        </div>
      </div>
    </>
  );
};

export default Tabs;
