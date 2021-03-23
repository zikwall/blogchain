import { Theme } from "@blogchain/components/ui/theme/theme";

export const SwitcherComponent = ({ isDarkMode, onSwitch }) => {
    const scheme = isDarkMode ? Theme.Dark : Theme.White;

    return (
        <div>
            <label className="switch">
                <input type="checkbox" checked={isDarkMode} onChange={() => {
                    onSwitch()
                }}/>
                <span className="slider round">

                </span>
            </label>
            <style jsx>{`
.switch {
  position: relative;
  display: inline-block;
  width: 74px;
  height: 34px;
  -webkit-tap-highlight-color: transparent;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${scheme.PrimaryColor};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border: 1px solid rgba(34,36,38,.15);
}

.slider:before {
  position: absolute;
  content: "";
  height: 17px;
  width: 17px;
  left: 8px;
  bottom: 8px;
  background-color: #ffc207;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: ${scheme.PrimaryColor};
  box-shadow: 0 1px 3px 0 rgb(68 76 86), 0 0 0 1px rgb(68 76 86);
}

input:focus + .slider {
  box-shadow: 0 0 2px ${scheme.PrimaryColor};
}

input:checked + .slider:before {
  -webkit-transform: translateX(42px);
  -ms-transform: translateX(42px);
  transform: translateX(42px);
  box-shadow: inset -4px 0 0 1px #ffc207;
  background-color: ${scheme.PrimaryColor};
}

.slider.round {
  border-radius: 44px;
}

.slider.round:before {
  border-radius: 50%;
}
.cp {
  font-family: Arial, Helvetica, sans-serif;
  color: #6e6d6d;
}
.cp a {
  color: #27173a;
  text-decoration: none;
  font-weight: bold;
} 
`}</style>
        </div>
    )
}