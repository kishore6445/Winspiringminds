import React from "react";
import { frameworkData } from "./frameworkData";
import "./framework.css";

const Framework = () => {
  return (
    <section className="framework-section">
      <div className="framework-container">

        {/* Section Header */}
        <div className="framework-header">

          <div className="framework-kicker">
            <span className="framework-number">04</span>
            <span>/</span>
            <span>THE PEOPLE GROWTH FRAMEWORK</span>
          </div>
          <div className="framework-header-line"/>
          <h2 className="framework-title">
            High-Performing Teams
            <br />
            <span className="framework-title__accent">
              Are Intentionally Developed
            </span>
          </h2>

          <p className="framework-description">
            A proven six-step leadership transformation framework for
            building stronger leaders, engaged teams, and sustainable
            organisational growth.
          </p>

        </div>

        {/* Framework Box */}
        <div className="framework-box">

          <div className="framework-steps">

            {frameworkData.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  className="framework-step"
                  key={item.number}
                >

                  {/* Circle + Number + Connector */}
                  <div className="framework-step__visual">

                    <div className="framework-step__circle">

                      {/* Number */}
                      <span className="framework-step__number">
                        {item.number}
                      </span>

                      {/* Icon */}
                      <div className="framework-step__icon">
                        <Icon
                          size={38}
                          strokeWidth={1.8}
                        />
                      </div>

                    </div>

                  </div>

                  {/* Step Title */}
                  <h3 className="framework-step__title">
                    {item.title}
                  </h3>

                  {/* Optional Description */}
                  {item.description && (
                    <p className="framework-step__description">
                      {item.description}
                    </p>
                  )}

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Framework;