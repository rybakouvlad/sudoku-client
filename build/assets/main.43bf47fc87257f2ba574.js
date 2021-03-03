/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 7267:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{background-color:#d99886;padding-top:20px}.form{flex-grow:0;padding:0}.form input{width:4vw;height:4vw;border-color:#1b3865;border-width:1px;border-style:solid;text-align:center;caret-color:transparent;font-size:25px;cursor:pointer}.form input:hover{transform:scale(1.05);background-color:#61807d}.form input:focus{outline:none}.form .activeCell{background-color:#d3dbf6}.form .inActiveCell{background:#eecac0}.container{width:max-content}.container .row:nth-child(3n){border-bottom:solid 2px #1b3865}.container .row .form:nth-child(3n){border-right:solid 2px #1b3865}.container .row .form:first-child{border-left:solid 2px #1b3865}.container .row:first-child{border-top:solid 2px #1b3865}.menu{width:100%;display:flex;justify-content:center;text-align:center}.menu h1{align-self:center}.sudoku_wrapper{display:flex;flex-direction:column;justify-content:center;align-items:center}.sudoku_wrapper h1{text-align:center}.sudoku_wrapper .score{display:flex;width:36vw;justify-content:space-around;margin-bottom:10px}.sudoku_wrapper .group_buttons{display:flex;width:36vw;justify-content:space-evenly;margin-top:10px}footer{display:flex;justify-content:space-around;height:5vh;align-items:center;position:absolute;width:100%;bottom:12px}.git_list{display:flex;margin:0;list-style:none}.git_list>li{margin:0 11%}.git_list>li>a{text-decoration:none;color:white}.rs_logo{width:50px;height:20px;background-image:url(\"https://app.rs.school/static/images/logo-rs-school.svg\");background-repeat:no-repeat;background-position:center}footer{display:flex;justify-content:space-around;height:5vh;align-items:center}.git_list{display:flex;margin:0;list-style:none}.git_list>li{margin:0 11%}.git_list>li>a{text-decoration:none;color:white}.rs_logo{width:50px;height:20px;background-image:url(\"https://app.rs.school/static/images/logo-rs-school.svg\");background-repeat:no-repeat;background-position:center}@media only screen and (max-width: 700px){.form{flex-grow:0;padding:0}.form input{width:30px;height:30px}}@media only screen and (max-width: 1100px){.form{flex-grow:0;padding:0}.form input{width:45px;height:45px}.sudoku_wrapper{display:flex;flex-direction:column;justify-content:center;align-items:center}.sudoku_wrapper h1{text-align:center}.sudoku_wrapper .score{display:flex;width:400px;justify-content:space-around;margin-bottom:10px}.sudoku_wrapper .group_buttons{display:flex;width:400px;justify-content:space-evenly;margin-top:10px}.sudoku_wrapper .group_buttons button{font-size:12px}}@media only screen and (max-width: 700px){.form{flex-grow:0;padding:0}.form input{width:40px;height:40px}}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 6435:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(3379);
            var content = __webpack_require__(7267);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 2810:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js + 5 modules
var react_router_dom = __webpack_require__(5934);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/ButtonGroup.js
var ButtonGroup = __webpack_require__(2086);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Button.js + 2 modules
var Button = __webpack_require__(3754);
;// CONCATENATED MODULE: ./src/client/hooks/game.hook.tsx

const GameContext = (0,react.createContext)(null);
const useGame = () => {
    return (0,react.useContext)(GameContext);
};
const GameProvider = ({ children }) => {
    const [timer, setTimer] = (0,react.useState)(0);
    const [isActive, setIsActive] = (0,react.useState)(false);
    const [isPaused, setIsPaused] = (0,react.useState)(false);
    const countRef = (0,react.useRef)(null);
    const handleStart = () => {
        setIsActive(true);
        setIsPaused(true);
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 1000);
    };
    const handlePause = () => {
        clearInterval(countRef.current);
        setIsPaused(false);
    };
    const handleResume = () => {
        setIsPaused(true);
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 1000);
    };
    const handleReset = () => {
        clearInterval(countRef.current);
        setIsActive(false);
        setIsPaused(false);
        setTimer(0);
    };
    return (react.createElement(GameContext.Provider, { value: {
            timer,
            setTimer,
            isActive,
            isPaused,
            handleStart,
            handlePause,
            handleResume,
            handleReset,
        } }, children));
};

// EXTERNAL MODULE: ./node_modules/sudoku/dist-web/index.js
var dist_web = __webpack_require__(850);
var dist_web_default = /*#__PURE__*/__webpack_require__.n(dist_web);
;// CONCATENATED MODULE: ./src/client/helpers/sudoku.ts

const getSection = (x, y) => {
    const n = Math.trunc(x / 3) * 3 + Math.trunc(y / 3);
    return n;
};
const getSudoku = () => {
    const resultSudoku = (dist_web_default());
    const start = resultSudoku.makepuzzle();
    const final = resultSudoku.solvepuzzle(start);
    console.log(dist_web_default().ratepuzzle(start, 1));
    const result = [];
    for (let i = 0; i < 9; i++) {
        const row = [];
        for (let n = 0; n < 9; n++) {
            row.push({
                value: start[n + i * 9] ? start[n + i * 9] + 1 : null,
                row: i,
                col: n,
                section: getSection(i, n),
                isReadOnly: start[n + i * 9] ? true : false,
                tryValue: final[n + i * 9] + 1,
                isActive: false,
            });
        }
        result.push(row);
    }
    return result;
};

// EXTERNAL MODULE: ./node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(8172);
;// CONCATENATED MODULE: ./src/client/hooks/reduce.hook.ts


const actionTypeSudoku = {
    NEW_GAME: 'new',
    CHANGE: 'change',
    ACTIVE: 'active',
    SET: 'set',
    HELP: 'help',
    SHOW_ALL: 'show-all',
};
const reducer = (state, action) => {
    return (0,immer_esm/* default */.ZP)(state, (produce) => {
        if (action.type === actionTypeSudoku.CHANGE) {
            produce[action.payload.cell.row][action.payload.cell.col].value = action.payload.value;
        }
        if (action.type === actionTypeSudoku.NEW_GAME) {
            return getSudoku();
        }
        if (action.type === actionTypeSudoku.SET) {
            return action.payload;
        }
        if (action.type === actionTypeSudoku.HELP) {
            console.log('kuku');
            produce[action.payload.y][action.payload.x].value = produce[action.payload.y][action.payload.x].tryValue;
            produce[action.payload.y][action.payload.x].isReadOnly = true;
        }
        if (action.type === actionTypeSudoku.ACTIVE) {
            for (let i = 0; i < 9; i++) {
                produce[action.payload.cell.row][i].isActive = action.payload.focus;
                produce[i][action.payload.cell.col].isActive = action.payload.focus;
            }
            produce.forEach((e) => {
                e.forEach((element) => {
                    if (element.section === action.payload.cell.section) {
                        element.isActive = action.payload.focus;
                    }
                });
            });
        }
        if (action.type === actionTypeSudoku.SHOW_ALL) {
            produce.map((el) => {
                el.map((element) => {
                    element.value = element.tryValue;
                    element.isReadOnly = true;
                });
            });
        }
    });
};

;// CONCATENATED MODULE: ./src/client/context/sudokuContext.tsx




const SudokuContext = (0,react.createContext)(null);
const useSudoku = () => {
    return (0,react.useContext)(SudokuContext);
};
const SudokuProvider = ({ children }) => {
    const [state, dispatch] = (0,react.useReducer)(reducer, getSudoku());
    const [active, setActive] = (0,react.useState)(null);
    const getHelp = (0,react.useCallback)(() => {
        if (active !== null) {
            dispatch({
                type: 'help',
                payload: {
                    x: active.x,
                    y: active.y,
                },
            });
        }
    }, [active]);
    const getAll = () => {
        dispatch({ type: 'show-all' });
    };
    const checkMoves = () => {
        return state.every((el) => el.every((element) => element.isReadOnly === true));
    };
    const checkSolution = () => {
        return state.every((el) => el.every((element) => element.value == element.tryValue));
    };
    return (react.createElement(SudokuContext.Provider, { value: { state, dispatch, active, setActive, getHelp, getAll, checkSolution, checkMoves } }, children));
};

;// CONCATENATED MODULE: ./src/client/context/move.context.tsx


const MoveContext = (0,react.createContext)(null);
const useMove = () => {
    return (0,react.useContext)(MoveContext);
};
const MoveProvider = ({ children }) => {
    const [moves, setMoves] = (0,react.useState)(0);
    const incrementMoves = () => {
        setMoves((mv) => mv + 1);
    };
    const resetMoves = () => {
        setMoves(0);
    };
    return (react.createElement(MoveContext.Provider, { value: { moves, incrementMoves, resetMoves, setMoves } }, children));
};

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Spinner.js
var Spinner = __webpack_require__(6968);
;// CONCATENATED MODULE: ./src/client/context/auth.context.tsx

const AuthContext = (0,react.createContext)(null);
const useAuth = () => {
    return (0,react.useContext)(AuthContext);
};
const AuthProvider = ({ children }) => {
    const [isLocal, setIsLocal] = (0,react.useState)(false);
    (0,react.useEffect)(() => {
        if (localStorage.getItem('game_time')) {
            console.log('TRYEEE');
            setIsLocal(true);
        }
    }, []);
    return react.createElement(AuthContext.Provider, { value: { isLocal, setIsLocal } }, children);
};

;// CONCATENATED MODULE: ./src/client/context/sounds.context.tsx

const MUSICURL = 'http://streaming.tdiradio.com:8000/house.mp3';
const BUTTONSOUND = 'http://www.pachd.com/a/button/button4.wav';
const SoundsContext = (0,react.createContext)(null);
const useSounds = () => {
    return (0,react.useContext)(SoundsContext);
};
const SoundsProvider = ({ children }) => {
    const [isMusic, setIsMusic] = (0,react.useState)(false);
    const [isSound, setIsSound] = (0,react.useState)(false);
    const [volume, setVolume] = (0,react.useState)(0.5);
    const [music] = (0,react.useState)(new Audio(MUSICURL));
    const [musicFocus] = (0,react.useState)(new Audio(BUTTONSOUND));
    function musicHandler() {
        if (isMusic === true) {
            music.pause();
            setIsMusic(false);
        }
        else {
            music.volume = volume;
            music.play();
            setIsMusic(true);
        }
    }
    function soundHandler() {
        if (isSound === true) {
            setIsSound(false);
        }
        else {
            setIsSound(true);
        }
    }
    const changeSound = () => {
        setIsMusic(!isMusic);
    };
    const increaseVolume = () => {
        const newV = volume + 0.1 > 1 ? 1 : volume + 0.1;
        music.volume = newV;
        setVolume(newV);
    };
    const decreaseVolume = () => {
        const newV = volume - 0.1 < 0 ? 0 : volume - 0.1;
        music.volume = newV;
        setVolume(newV);
    };
    function soundPlay() {
        if (!isSound)
            return;
        musicFocus.volume = volume;
        musicFocus.play();
    }
    return (react.createElement(SoundsContext.Provider, { value: {
            isMusic,
            isSound,
            volume,
            musicHandler,
            changeSound,
            increaseVolume,
            decreaseVolume,
            soundPlay,
            soundHandler,
        } }, children));
};

;// CONCATENATED MODULE: ./src/client/components/Sounds.tsx



const Sounds = () => {
    const { isSound, isMusic, volume, musicHandler, increaseVolume, decreaseVolume, soundHandler } = useSounds();
    return (react.createElement(react.Fragment, null,
        react.createElement(Button/* default */.Z, { className: "mt-2", onClick: musicHandler, variant: `${isMusic ? 'outline-success' : 'outline-danger'}` }, `Music ${isMusic ? 'ON' : 'OFF'}`),
        react.createElement(Button/* default */.Z, { className: "mt-2", onClick: soundHandler, variant: `${isSound ? 'outline-success' : 'outline-danger'}` }, `Sounds ${isSound ? 'ON' : 'OFF'}`),
        react.createElement(ButtonGroup/* default */.Z, { className: "mt-2", size: "sm" },
            react.createElement(Button/* default */.Z, { disabled: volume === 1 ? true : false, onClick: increaseVolume }, "PLUS"),
            react.createElement(Button/* default */.Z, { disabled: volume === 0 ? true : false, onClick: decreaseVolume }, "MINUS"))));
};

;// CONCATENATED MODULE: ./src/client/components/MenuButtons.tsx








const MenuButtons = (props) => {
    const { handleStart, handleResume, handleReset, setTimer } = useGame();
    const { dispatch } = useSudoku();
    const { setMoves } = useMove();
    const { isLocal, setIsLocal } = useAuth();
    const [isLoading, setIsLoading] = (0,react.useState)(true);
    const [isNew, setIsNew] = (0,react.useState)(false);
    const checkLocal = (0,react.useCallback)(() => {
        if (isLocal) {
            setTimer(parseInt(localStorage.getItem('game_time')));
            setMoves(parseInt(localStorage.getItem('game_moves')));
            dispatch({ type: 'set', payload: JSON.parse(localStorage.getItem('game_data')) });
            setIsLocal((loc) => !loc);
            setIsLoading(false);
            resumeGame();
        }
        setIsLoading(false);
    }, [isLocal]);
    (0,react.useEffect)(() => {
        checkLocal();
    }, [isLocal]);
    const newGame = () => {
        if (isNew) {
            setIsNew(false);
        }
        else {
            localStorage.clear();
            handleReset();
            setMoves(0);
            dispatch({ type: 'new' });
            setIsNew(true);
        }
        handleStart();
        props.changeMenuStatus(false);
    };
    const resumeGame = () => {
        props.changeMenuStatus(false);
        handleResume();
    };
    if (isLoading) {
        return react.createElement(Spinner/* default */.Z, { animation: "border", variant: "danger" });
    }
    return (react.createElement(react.Fragment, null,
        react.createElement("div", { className: "menu" },
            react.createElement(ButtonGroup/* default */.Z, { vertical: true },
                react.createElement("h1", null, "MENU"),
                react.createElement(Button/* default */.Z, { variant: "secondary", className: "mt-2", onClick: newGame }, "NEW GAME"),
                react.createElement(Button/* default */.Z, { variant: "secondary", className: "mt-2", onClick: resumeGame }, "RESUME GAME"),
                react.createElement(Sounds, null),
                react.createElement(Button/* default */.Z, { variant: "secondary", className: "mt-2", onClick: () => props.setIsTable(true) }, "BEST RESULT")))));
};

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Table.js
var Table = __webpack_require__(5147);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// CONCATENATED MODULE: ./src/client/helpers/time.ts
const getTimes = (timer) => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = Math.floor(timer / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);
    return `${getHours} : ${getMinutes} : ${getSeconds}`;
};

;// CONCATENATED MODULE: ./src/client/components/TableResult.tsx
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const TableResult = (props) => {
    const [tableResult, setTableResul] = (0,react.useState)([]);
    const getResults = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield axios_default().get('http://localhost:3000/api/result/get');
            console.log(response);
            setTableResul(response.data.sort((a, b) => {
                return b.moves - a.moves;
            }));
        }
        catch (error) { }
    });
    (0,react.useEffect)(() => {
        getResults();
    }, []);
    const menuHandler = () => {
        props.setIsTable(false);
    };
    return (react.createElement(react.Fragment, null,
        react.createElement(Button/* default */.Z, { onClick: menuHandler }, "Back"),
        react.createElement(Table/* default */.Z, { striped: true, bordered: true, hover: true },
            react.createElement("thead", null,
                react.createElement("tr", null,
                    react.createElement("th", null, "#"),
                    react.createElement("th", null, "Name"),
                    react.createElement("th", null, "Time"),
                    react.createElement("th", null, "Moves"))),
            react.createElement("tbody", null, tableResult.map((el, index) => {
                return (react.createElement("tr", { key: index },
                    react.createElement("td", null, index + 1),
                    react.createElement("td", null, el.name),
                    react.createElement("td", null, getTimes(el.time)),
                    react.createElement("td", null, el.moves)));
            })))));
};

;// CONCATENATED MODULE: ./src/client/components/MenuSudoku.tsx



const MenuSudoku = (props) => {
    const [isTable, setIsTable] = (0,react.useState)(false);
    return (react.createElement(react.Fragment, null, isTable ? (react.createElement(TableResult, { setIsTable: setIsTable })) : (react.createElement(MenuButtons, { changeMenuStatus: props.changeMenuStatus, setIsTable: setIsTable }))));
};

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Container.js
var Container = __webpack_require__(682);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Row.js
var Row = __webpack_require__(4051);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Col.js
var Col = __webpack_require__(1555);
;// CONCATENATED MODULE: ./src/client/components/SudokuSectiom.tsx





const SS = (props) => {
    console.log('CELL');
    const { dispatch, setActive } = (0,react.useContext)(SudokuContext);
    const [isActive, setIsActive] = (0,react.useState)(false);
    const { incrementMoves } = useMove();
    const { soundPlay } = useSounds();
    const handleChange = (0,react.useCallback)((e) => {
        let value = parseInt(e.target.value, 10);
        if (isNaN(value)) {
            value = null;
        }
        incrementMoves();
        dispatch({ type: 'change', payload: { cell: props.cell, value: value } });
    }, []);
    const focusHandler = () => {
        soundPlay();
        setActive({ x: props.cell.col, y: props.cell.row });
        dispatch({ type: 'active', payload: { cell: props.cell, focus: true } });
        setIsActive(true);
    };
    const blurHandler = () => {
        dispatch({ type: 'active', payload: { cell: props.cell, focus: false } });
        setIsActive(false);
    };
    return (react.createElement(Col/* default */.Z, { className: "form" },
        react.createElement("input", { style: {
                backgroundColor: isActive ? '#6f88c4' : null,
                color: props.cell.isReadOnly ? '#2b241f' : null,
                fontWeight: props.cell.isReadOnly ? 700 : 400,
            }, className: `${props.cell.isActive ? 'activeCell' : 'inActiveCell'}`, maxLength: 1, value: props.cell.value ? props.cell.value : '', readOnly: props.cell.isReadOnly, onChange: handleChange, onFocus: focusHandler, onBlur: blurHandler })));
};
const SudokuSection = react.memo(SS);

;// CONCATENATED MODULE: ./src/client/components/SudokuTable.tsx




const SudokuTableMemo = () => {
    const { state } = useSudoku();
    console.log('TABLE');
    return (react.createElement(Container/* default */.Z, { className: "container" }, state.map((el, index) => {
        return (react.createElement(Row/* default */.Z, { key: index, className: "justify-content-md-center row" }, el.map((element, i) => {
            return react.createElement(SudokuSection, { key: i, cell: element });
        })));
    })));
};
const SudokuTable = react.memo(SudokuTableMemo);

;// CONCATENATED MODULE: ./src/client/components/Score.tsx





const Score = () => {
    const { moves } = useMove();
    const { state } = useSudoku();
    const { timer } = useGame();
    (0,react.useEffect)(() => {
        localStorage.setItem('game_time', timer.toString());
        localStorage.setItem('game_moves', moves.toString());
        localStorage.setItem('game_data', JSON.stringify(state));
    }, [timer]);
    return (react.createElement("div", { className: "score" },
        react.createElement("div", null, getTimes(timer)),
        react.createElement("div", null,
            `Moves: ${moves}`,
            " ")));
};

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Modal.js + 48 modules
var Modal = __webpack_require__(1358);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/InputGroup.js
var InputGroup = __webpack_require__(2318);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/FormControl.js + 2 modules
var FormControl = __webpack_require__(9005);
;// CONCATENATED MODULE: ./src/client/components/WinModal.tsx
var WinModal_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





const WinModal = () => {
    const [name, setName] = (0,react.useState)('');
    const { moves } = useMove();
    const { timer } = useGame();
    const submitHandler = () => WinModal_awaiter(void 0, void 0, void 0, function* () {
        console.log(moves);
        console.log(timer);
        console.log(name);
        try {
            const response = yield axios_default().post('http://localhost:3000/api/result/set', {
                name: name,
                moves: moves,
                time: timer,
            });
            console.log(response);
        }
        catch (error) { }
        setName('');
    });
    return (react.createElement(react.Fragment, null,
        react.createElement(Modal/* default.Header */.Z.Header, { closeButton: true },
            react.createElement(Modal/* default.Title */.Z.Title, null, "You WIN")),
        react.createElement(Modal/* default.Body */.Z.Body, null,
            react.createElement("p", null, "Please enter your name"),
            react.createElement(InputGroup/* default */.Z, { className: "mb-3" },
                react.createElement(FormControl/* default */.Z, { placeholder: "Your username", "aria-label": "Recipient's username", "aria-describedby": "basic-addon2", value: name, onChange: (e) => setName(e.target.value) }),
                react.createElement(InputGroup/* default.Append */.Z.Append, null,
                    react.createElement(Button/* default */.Z, { onClick: submitHandler, variant: "outline-secondary" }, "Submit"))))));
};

;// CONCATENATED MODULE: ./src/client/components/FailedModal.tsx


const FailedModal = () => {
    return (react.createElement(react.Fragment, null,
        react.createElement(Modal/* default.Header */.Z.Header, { closeButton: true },
            react.createElement(Modal/* default.Title */.Z.Title, null, "Check you solution")),
        react.createElement(Modal/* default.Body */.Z.Body, null, "Please check your solution, you have mistaks")));
};

;// CONCATENATED MODULE: ./src/client/components/ResultModal.tsx




const ResultModal1 = (props) => {
    const handleClose = () => props.setShow(false);
    console.log(props.isSolve);
    console.log('MODAL');
    return (react.createElement(react.Fragment, null,
        react.createElement(Modal/* default */.Z, { show: props.show, onHide: handleClose }, props.isSolve ? react.createElement(WinModal, null) : react.createElement(FailedModal, null))));
};
const ResultModal = react.memo(ResultModal1);

;// CONCATENATED MODULE: ./src/client/components/Sudoku.tsx








const Sudoku = (props) => {
    const { handlePause } = useGame();
    const { getHelp, getAll, checkSolution, checkMoves } = useSudoku();
    const { incrementMoves } = useMove();
    const [show, setShow] = (0,react.useState)(false);
    const [isSolve, setIsSolve] = (0,react.useState)(false);
    const callMenu = () => {
        props.setIsMenu(true);
        handlePause();
    };
    const checkDone = () => {
        if (checkSolution() && !checkMoves()) {
            setIsSolve(true);
            setShow(true);
        }
        else {
            setIsSolve(false);
            setShow(true);
        }
    };
    const helpHandler = () => {
        getHelp();
        incrementMoves();
    };
    return (react.createElement("div", { className: "sudoku_wrapper" },
        react.createElement(ResultModal, { isSolve: isSolve, show: show, setShow: setShow }),
        react.createElement("h1", null, "SUDOKU"),
        react.createElement(Score, null),
        react.createElement(SudokuTable, null),
        react.createElement("div", { className: "group_buttons" },
            react.createElement(Button/* default */.Z, { variant: "outline-success", onClick: callMenu }, "MENU"),
            react.createElement(Button/* default */.Z, { variant: "outline-success", onClick: helpHandler }, "GET HELP"),
            react.createElement(Button/* default */.Z, { variant: "outline-success", onClick: getAll }, "GET ALL"),
            react.createElement(Button/* default */.Z, { variant: "outline-success", onClick: checkDone }, "CHECK SOLVE"))));
};

;// CONCATENATED MODULE: ./src/client/components/StartGame.tsx






const StartGame = () => {
    const [isMenu, setIsMenu] = (0,react.useState)(true);
    console.log('STARTGAME');
    const changeMenuStatus = (status) => {
        setIsMenu(status);
    };
    return (react.createElement(react.Fragment, null,
        react.createElement(GameProvider, null,
            react.createElement(SudokuProvider, null,
                react.createElement(MoveProvider, null, isMenu ? react.createElement(MenuSudoku, { changeMenuStatus: changeMenuStatus }) : react.createElement(Sudoku, { setIsMenu: setIsMenu }))))));
};

;// CONCATENATED MODULE: ./src/client/components/Footer.tsx

const Footer = () => {
    return (react.createElement("footer", null,
        react.createElement("ul", { className: "git_list" },
            react.createElement("li", null,
                react.createElement("a", { href: "https://github.com/rybakouvlad" }, "rybakouvlad"))),
        react.createElement("span", { className: "year" }, "2021"),
        react.createElement("a", { href: "https://rs.school/js/" },
            react.createElement("div", { className: "rs_logo" }))));
};

// EXTERNAL MODULE: ./src/client/css/index.scss
var css = __webpack_require__(6435);
;// CONCATENATED MODULE: ./src/client/App/index.tsx






const App = () => {
    return (react.createElement(AuthProvider, null,
        react.createElement(SoundsProvider, null,
            react.createElement(react.Fragment, null,
                react.createElement(StartGame, null),
                react.createElement(Footer, null)))));
};

;// CONCATENATED MODULE: ./src/client/Client.tsx




const entryBlock = document.getElementById('root');
const renderFunction = entryBlock.hasChildNodes() ? react_dom.hydrate : react_dom.render;
renderFunction(react.createElement(react_router_dom/* BrowserRouter */.VK, null,
    react.createElement(App, null)), entryBlock);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {};
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			[2810,216]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksudoku"] = self["webpackChunksudoku"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;