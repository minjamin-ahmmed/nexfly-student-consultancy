// import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
import { motion } from "framer-motion";

const Location = () => {
  // const position = [23.7514265, 90.3782834];

  return (
    <div className="p-5 md:p-10 lg:p-20">
      <div className="flex flex-col lg:flex-row items-start justify-between mb-10">
        {/* <div
          className="lg:w-1/2"
          style={{ height: "500px", position: "relative" }}
        >
          <MapContainer
            center={position}
            zoom={17}
            scrollWheelZoom={true}
            style={{
              height: "60%",
              width: "80%",
              margin: "auto",
            }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                NexKraft Limited <br /> নেক্সক্রাফট লিমিটেড - NexKraft Limited
              </Popup>
            </Marker>
          </MapContainer>
        </div> */}

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <div className="relative w-full pb-[56.25%]">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.0399349402356!2d90.3782834!3d23.7514265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b21d28b509%3A0xdd990cc71dffedc5!2sNexKraft%20Limited!5e0!3m2!1sen!2sbd!4v1701879043468!5m2!1sen!2sbd"
              className="absolute top-0 left-0 w-full h-full lg:w-[600px] lg:h-[450px] rounded-3xl"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:w-1/2 mt-4"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6">
            Our Location
          </h1>
          <h3 className="text-xl font-medium mb-4">Head Quarters</h3>
          <p className="text-slate-700 mb-4 text-lg">Snappy Inc.</p>
          <p className="text-slate-700 mb-4 text-lg">San Francisco, USA</p>
          <p className="text-slate-700 mb-4 text-lg">
            123 Tech Boulevard, Suite 456
          </p>
          <p className="text-slate-700 mb-4 text-lg">United States</p>

          <button className="btn bg-indigo-500 hover:bg-indigo-700 font-bold rounded-full text-white px-6 py-2">
            Explore
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Location;
