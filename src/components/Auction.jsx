import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Auction = () => {
  const [auctions] = useState([
    {
      id: 1,
      title: "Luxury Apartment",
      image: "https://via.placeholder.com/300",
      bid: "$500,000",
      status: "Open",
    },
    {
      id: 2,
      title: "Vintage Car",
      image: "https://via.placeholder.com/300",
      bid: "$120,000",
      status: "Open",
    },
    {
      id: 3,
      title: "Antique Painting",
      image: "https://via.placeholder.com/300",
      bid: "$75,000",
      status: "Closed",
    },
    {
      id: 4,
      title: "Beachfront Villa",
      image: "https://via.placeholder.com/300",
      bid: "$950,000",
      status: "Open",
    },
  ]);

  return (
    <div className="container mt-4">
      <h4 className="fw-bold mb-3">Ongoing Auctions</h4>
      <div className="row">
        {auctions.map((auction) => (
          <div
            key={auction.id}
            className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3"
          >
            <div className="card shadow-sm h-100">
              <img
                src={auction.image}
                className="card-img-top"
                alt={auction.title}
              />
              <div className="card-body">
                <h5 className="card-title">{auction.title}</h5>
                <p className="card-text">
                  Current Bid: <strong>{auction.bid}</strong>
                </p>
                <span
                  className={`badge ${
                    auction.status === "Open" ? "bg-success" : "bg-danger"
                  }`}
                >
                  {auction.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Auction;
