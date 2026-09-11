import React from "react";
import l1 from "../../assets/images/l1.png";
import l2 from "../../assets/images/l2.png";
import l3 from "../../assets/images/l3.png";
import l7 from "../../assets/images/l7.png";
import l6 from "../../assets/images/l6.png";

const Litho35Machine = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-[30px]
        lg:block
      "
    >
      {/* MACHINE AREA */}

      <div
        className="
          relative
          mx-auto
          flex
          w-full
          items-start
          justify-center
          px-4
          min-h-[650px]
        "
      >
        {/* MACHINE CONTAINER */}

        <div
          className="
            relative
            h-[620px]
            w-[300px]
            shrink-0
          "
        >
          {/* MACHINE SCALE WRAPPER */}

          <div
            className="
              absolute
              left-1/2
              top-0
              h-[680px]
              w-[300px]
              -translate-x-1/2
            "
            style={{
              transformOrigin: "top center",
              transform: "scale(0.8)",
            }}
          >
            {/* PART 1 */}

            <img
              src={l1}
              alt="Litho 35 Part 1"
              draggable={false}
              className="
                absolute
                left-[32px]
                top-[0px]
                z-10
                block
                h-auto
                w-[235px]
                select-none
                object-contain
              "
            />

            {/* PART 2 */}

            <img
              src={l2}
              alt="Litho 35 Part 2"
              draggable={false}
              className="
                absolute
                left-[55px]
                top-[120px]
                z-20
                block
                h-auto
                w-[190px]
                select-none
                object-contain
              "
            />

            {/* PART 3 */}

            <img
              src={l3}
              alt="Litho 35 Part 3"
              draggable={false}
              className="
                absolute
                left-[48px]
                top-[210px]
                z-30
                block
                h-auto
                w-[205px]
                select-none
                object-contain
              "
            />

            {/* PART 4 */}

            <img
              src={l7}
              alt="Litho 35 Part 4"
              draggable={false}
              className="
                absolute
                left-[18px]
                top-[300px]
                z-40
                block
                h-auto
                w-[265px]
                select-none
                object-contain
              "
            />

            {/* PART 6 */}

            <img
              src={l6}
              alt="Litho 35 Part 6"
              draggable={false}
              className="
                absolute
                left-[40px]
                top-[460px]
                z-50
                block
                h-auto
                w-[215px]
                select-none
                object-contain
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Litho35Machine;
