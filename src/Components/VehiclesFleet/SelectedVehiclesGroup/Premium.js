import React from "react";
import VehicleCard from "../VehicleCard";
import Button from "../../Button/Buttons";
import VehicleFleetStarter from "../VehicleFleetStarter";

function Premium() {
    return (
        <>
            <VehicleFleetStarter/>
            <div className="row Vehiclecardone">
                <VehicleCard className="col-lg-4  col-md-4 col-sm-6 col-6" imgClassName="carCardOne" url="/images/Premium/P1.jpg" />
                <VehicleCard className="col-lg-4  col-md-4 col-sm-6 col-6" imgClassName="carCardOne" url="/images/Premium/P2.jpg" />
                <VehicleCard className="col-lg-4 col-md-4 col-sm-12 col-12" imgClassName="carCardOne" url="/images/Premium/P3.jpg" />
            </div>
            <div className="row Vehiclecardtwo">
                <VehicleCard className="col-lg-3  col-md-3 col-sm-6 col-6" imgClassName="carCardTwo" url="/images/Premium/P4.jpg" />
                <VehicleCard className="col-lg-3  col-md-3 col-sm-6 col-6" imgClassName="carCardTwo" url="/images/Premium/P5.jpg" />
                <VehicleCard className="col-lg-3  col-md-3 col-sm-6 col-6" imgClassName="carCardTwo" url="/images/Premium/P6.jpg" />
                <VehicleCard className="col-lg-3  col-md-3 col-sm-6 col-6" imgClassName="carCardTwo" url="/images/Premium/P7.jpg" />
            </div>
            <div className="text-center">


            <Button className="btn btn-light btn-lg " name="Proceed" type="submit" id="showmore" />
            </div>
            </>
    )
}


export default Premium;