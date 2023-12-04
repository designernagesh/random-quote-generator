import { useState, useEffect } from "react";

const url = "https://api.quotable.io/random";

function App() {
  const [quote, setQuote] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setQuote(data);
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  };

  useEffect(() => {
    // Fetch a Quote when the component mounts
    fetchQuote();
  }, []);

  const getQuote = () => {
    fetchQuote();
  };

  return (
    <>
      <div className="container">
        <h2 className="title">Random Quote Generator</h2>
        <p className="sub-title">
          Click the button to get the Random Quote! 😊
        </p>

        <span className="emoji">🎯</span> 
        <p className={`quote ${quote ? "fade" : ""}`}>
          {quote.content}
          <span> - {quote.author}</span>
        </p>
        <button onClick={getQuote}>Get Random Quote</button>
      </div>
    </>
  );
}

export default App;
