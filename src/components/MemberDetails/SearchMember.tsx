import React, { useContext, useEffect, useRef, useState } from "react";
import { Input } from "@mbkit/input";

import styles from "./SearchMember.module.scss";
import FilterTableContext from "../store/filter-table-context";

//Don't forget to add useCallback to reference method called by props.onSearchMember

const SearchMember: React.FC<{onApplyFilter:() => void}> = (props) => {
  const filterCtx = useContext(FilterTableContext);
  const [enteredSearch, setEnteredSearch] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if(enteredSearch === searchInputRef.current?.value) {
        console.log(enteredSearch);
        console.log("Sending http request...");
        filterCtx.filterValue = enteredSearch;
        props.onApplyFilter();
        //send http get request with query
        //call method from MembersList => props.onSearchMembers(response data array)
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    }
  }, [enteredSearch, searchInputRef]);

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredSearch(event.target.value);
  };

  return (
    <div className={styles.search}>
      <div className={styles.searchbox}>
        <Input
          ref={searchInputRef}
          value={enteredSearch}
          onChange={searchHandler}
          placeholder="Search Client Name, Client ID"
          before={
            <svg width="24" height="24" viewBox="0 0 32 32">
              <g
                id="Icons/UI/Search--1jdu9cRQP3t6M0L3ABYX"
                fill="none"
                fillRule="evenodd"
                stroke="none"
                strokeWidth="1"
              >
                <path
                  id="Mask--1jdu9cRQP3t6M0L3ABYX"
                  fill="#54575F"
                  d="M13.5 4.5c5.5228475 0 10 4.4771525 10 10 0 2.5817263-.9783543 4.9349457-2.5845372 6.7091323l5.4380906 5.4373143c.4509087.4509087-.1764425 1.1174693-.6443988.7620271l-.062708-.0549203-5.4373143-5.4380906C18.4349457 23.5216457 16.0817263 24.5 13.5 24.5c-5.5228475 0-10-4.4771525-10-10s4.4771525-10 10-10zm0 1c-4.97056275 0-9 4.02943725-9 9 0 4.9705627 4.02943725 9 9 9 4.9705627 0 9-4.0294373 9-9 0-4.97056275-4.0294373-9-9-9z"
                ></path>
              </g>
            </svg>
          }
        />
      </div>
    </div>
  );
};

export default SearchMember;
