import React from "react";
import "./Accordion.css";

export const Accordion = () => {
  return (
    <>
      <h1 class="startxx">
        <span class="end1">W</span>
        <span class="middle1">hat we provid</span>

        <span class="end2">e</span>
      </h1>

      {/* Accordion Slider Code Start */}
      <div class="accordion">
        {/*<!-- BOX 1 -->*/}
        <div class="box a1">
          <div class="image_1">
            <div class="text">
              <h2>UI/UX Designing</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum iaculis nisl sed dictum aliquam.
              </p>
            </div>
          </div>
        </div>

        {/*<!-- BOX 2 -->*/}
        <div class="box a2">
          <div class="image_2">
            <div class="text">
              <h2>Frontend</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum iaculis nisl sed dictum aliquam.
              </p>
            </div>
          </div>
        </div>

        {/*<!-- BOX 3 -->*/}
        <div class="box a3">
          <div class="image_3">
            <div class="text">
              <h2>Graphic designing</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum iaculis nisl sed dictum aliquam.
              </p>
            </div>
          </div>
        </div>

        {/*<!-- BOX 5 -->*/}
        <div class="box a5">
          <div class="image_5">
            <div class="text">
              <h2>Backend</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum iaculis nisl sed dictum aliquam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
