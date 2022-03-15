import React, { useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector, useDispatch } from "react-redux";
import { getAllCars } from "../redux/actions/carsAction";
import { Button, Row, Col } from "antd";

const Home = () => {
  const { cars } = useSelector((state) => state.carsReducer);
  // const {loading} = useSelector(state=>state.alertReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, []);

  return (
    <DefaultLayout>
      <Row justify="center" gutter={16} className="mt-5">
        {cars.map((car) => {
          return (
            <Col lg={5} sm={24} xs={24}>
              <div className="car p-2 bs1 mt-3">
                <img src={car.image} className="carimg" />
                <div className="car-content d-flex align-items-center justify-content-between">
                  <div>
                    <div>
                      <p>{car.name} Car Name</p>
                      <p>{car.rentPerKm} Rent per Km /-</p>
                    </div>
                    <div>
                      <button className="btn btn-primary">Book Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </DefaultLayout>
  );
};

export default Home;
