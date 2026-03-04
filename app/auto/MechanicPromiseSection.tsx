export const MechanicPromiseSection: React.FC = () => {
  return (
    <div className="border-t border-b border-dashed">
      <div className="max-w-[77rem] px-10 m-auto border-r border-l border-dashed">
        <div className="py-20 ">
          <div className="flex flex-col items-center pb-10">
            <h2 className="text-2xl font-semibold">Our promise</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="col-span-1">
              <img
                src="/img/promise.jpg"
                className="rounded-lg object-cover size-full"
                alt="Picture of the author"
              />
            </div>
            <div className="flex flex-col gap-10 md:col-span-1 lg:col-span-2">
              <div>
                <span className="font-semibold">
                  Unmatched Customer Experience:
                </span>{" "}
                At Royal Auto, your satisfaction drives us. From warm welcomes
                to clear, consistent communication, we ensure a seamless and
                comfortable experience every step of the way. Our team is always
                ready to assist, making your automotive care journey smooth and
                stress-free. turn.
              </div>
              <div>
                <span className="font-semibold">Superior Repair Quality:</span>{" "}
                Our expert technicians bring craftsmanship to car care, using
                the latest technologies and quality parts to ensure your vehicle
                performs at its best. Continuous training keeps us at the
                forefront of automotive repair, guaranteeing your car receives
                top-tier service.
              </div>
              <div>
                <span className="font-semibold">Transparent Service:</span>{" "}
                {`Integrity fuels our operations. We promise straightforward explanations and honest advice, ensuring you're fully informed and confident in your decisions. No hidden fees or unnecessary services—just genuine, tailored solutions.`}
              </div>
              <div>
                <span className="font-semibold">Guaranteed Satisfaction:</span>{" "}
                {`Your trust is our trophy. We back our work with a solid satisfaction guarantee, ready to address any concerns and ensure you're delighted with our service. At Royal Auto, we treat your vehicle with the care it deserves, striving to exceed expectations at every turn.`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
