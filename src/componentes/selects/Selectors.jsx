import React from "react";
import PropTypes from "prop-types";
import useAutocomplete from "@mui/base/useAutocomplete";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import { autocompleteClasses } from "@mui/material/Autocomplete";
import { useState, useEffect } from "react";

const Root = styled("div")(
  ({ theme }) => `
  color: ${
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,.85)"
  };
  font-size: 14px;
  z-index:198;
`
);

const InputWrapper = styled("div")(
  ({ theme }) => `
  min-width:100px;
  max-width:200px;
  max-heigth:10px;
  border: 1px solid ${theme.palette.mode === "dark" ? "#434343" : "#d9d9d9"};
  background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
  z-index:198;
  border-radius: 4px;
  display: flex;
  justify-content:space-evenly;
  z-index:992;

  &:hover {
    border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
  }

  &.focused {
    border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    z-index:3434;
  }

  & input {
    background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
    color: #000;
    height: fit-content;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 0px;
    flex-grow: 5;
    border: 0;
    margin: 0;
    outline: 0;
  }
   
`
);

function Tag(props) {
  const { label, onDelete, ...other } = props;
  return (
    <div {...other}>
      <span>{label}</span>
      <CloseIcon onClick={onDelete} />
    </div>
  );
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const StyledTag = styled(Tag)(
  ({ theme }) => `
  display: flex;
  align-items: center;
  height: 24px;
  margin: 2px;
  line-height: 122px;
  background-color: ${
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.08)" : "#f2f2f2"
  };
  border: 1px solid ${theme.palette.mode === "dark" ? "#303030" : "#c7c7c7"};
  border-radius: 2px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: 0;
  overflow: hidden;

  &:focus {
    border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
    background-color: ${theme.palette.mode === "dark" ? "#003b57" : "#e6f7ff"};
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 12px;
    cursor: pointer;
    padding: 4px;
  }
`
);

const Listbox = styled("ul")(
  ({ theme }) => `
  width: 200px;
  heigth: fit-content;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: #424242d7;
  display: flex;
  overflow: hiden;
  overflow-y:scroll;
   scroll-behavior: smooth;
   /* use this property to hide the scrollbar on firefox */
   scrollbar-width: none;
  flex-direction:column;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 7;
  color:#fff;
  border:1px solid #fff;
  border-top:none;


  ::-webkit-scrollbar {
    display: none;
  }

  & li {
    padding: 5px 12px;
    display: flex;
    color:#fff
    
    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: ${theme.palette.mode === "dark" ? "#2b2b2b" : "#000"};
    color:#fff;
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li.${autocompleteClasses.focused} {
    background-color: ${theme.palette.mode === "dark" ? "#003b57" : "#343434"};
    cursor: pointer;

    & svg {
      color: currentColor;
    }
  }
`
);

export default function CustomizedHook({ child }) {
  const [disableds, setDisableds] = useState("visible");

  const {
    getRootProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: "customized-hook-demo",
    multiple: true,
    options: salsas,
    getOptionLabel: (option) => option.title,
  });
  const [salsa, setSalsa] = useState([]);
  useEffect(() => {
    setSalsa(value);
    if (value.length >= 2) {
      setDisableds("none");
    } else {
      setDisableds("visible");
    }
  }, [value, salsa]);

  return (
    <Root>
      <div {...getRootProps()}>
        <InputWrapper ref={setAnchorEl} className={focused ? "focused" : ""}>
          {value.map((option, index) => (
            <StyledTag label={option.title} {...getTagProps({ index })} />
          ))}

          <input
            placeholder="Salsa (maximo 2)"
            onClick={() => child(salsa)}
            {...getInputProps()}
          />
        </InputWrapper>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox sx={{ pointerEvents: disableds }} {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li className="sili" {...getOptionProps({ option, index })}>
              <span>{option.title}</span>
              <CheckIcon fontSize="small" />
            </li>
          ))}
        </Listbox>
      ) : null}
    </Root>
  );
}

const salsas = [
  { title: "Sin Salsas" },
  { title: "Barbacoa Casera" },
  { title: "Alioli" },
  { title: "Mayonesa C/Ciboulet" },
  { title: "Mayonesa" },
  { title: "Ketchup C/Cebolla" },
  { title: "Ketchup" },
  { title: "Mostaza" },
  {
    title: "Barbacoa con panceta y cebolla",
  },
  { title: "Mostaza Dijon" },
  { title: "Mostaza con Miel" },
];
