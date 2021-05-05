import React, { useState } from 'react';
import './DropDown.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown} from '@fortawesome/free-solid-svg-icons';
import check from "./check.svg"

export interface Item {
  [key: string]: {
    title: string,
    text: string
  }[]
}


function DropDown({ detailedMenu, items }: { detailedMenu: boolean, items: Item}) {
  const [selectedItem, setSelectedItem] = useState("Hopper")
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleIndividualItem = (value: any, selectedCategory: string, selectedIndex: number) => {
    console.log("here")
    setSelectedItem(value)
    setSelectedCategory(selectedCategory);
    setSelectedIndex(selectedIndex)


  }
  return (
    <div className={`st-70 parent`}>
      <div className="button-wrapper">
        <button className="selectBtn pl-15 py-5 md-text bg-secondary text-primary">
          {selectedItem}
          <FontAwesomeIcon icon={faCaretDown} className="ml-15 mr-5" />
          {
            <div className="dropDown mt-5 shadow py-5 bg-secondary text-primary" style={!detailedMenu ? {
              width: "180px",
              maxWidth: "180px"
            } : {
              width: "100%",
              minWidth: "291px"
            }}>
              {
                Object.values(items).map((value: any, category: any) => {
                  return (
                    <div className="divider pt-5" key={category}>
                      {
                        value.map((val: any, index: any) => {
                          const isSelected = selectedCategory === category && selectedIndex === index;
                          return (
                            <div key={index} onClick={() => handleIndividualItem(val.title, category, index)}
                              className={`py-5 individual-dropdown ${isSelected ? 'bg-primary' : ""}`}>
                              <img style={isSelected ? { visibility: "visible" } : { visibility: "hidden" }}
                                src={check} alt="" className="check mx-15" />
                              <div className="column-data pr-20">
                                <div className={`md-text ${(isSelected) ? "focus-text-primary" : "text-primary"}`}>
                                  {val.title}
                                </div>
                                {
                                  detailedMenu && <div className={`my-5  bg-small-text  desc-text ${(isSelected) ? 'focus-text-secondary' : 'text-secondary'}`}>
                                    {val.text}
                                  </div>
                                }
                              </div>

                            </div>
                          )

                        })
                      }
                    </div>
                  )
                })
              }

            </div>
          }
        </button>
      </div>
    </div >
  );
}

export default DropDown;