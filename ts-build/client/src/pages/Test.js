"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable import/first */
const react_1 = require("react");
const client_1 = require("@apollo/client");
const queries_1 = require("../utils/queries");
const mutations_1 = require("../utils/mutations");
const Test = () => {
    const [mutateFunction, { data, loading, error }] = (0, client_1.useMutation)(mutations_1.ADD_USER);
    const [alert, changeAlert] = (0, react_1.useState)({
        show: false,
        message: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}, void 0)
    });
    const [users, changeUsers] = (0, react_1.useState)({
        users: [],
        showUsers: false
    });
    const [formInfo, changeFormInfo] = (0, react_1.useState)({
        name: '',
        email: ''
    });
    const queryData = (0, client_1.useQuery)(queries_1.QUERY_USERS);
    /* ========================== Handle Change */
    const handleChange = (e) => {
        switch (e.currentTarget.id) {
            case 'firstName':
                changeFormInfo(Object.assign(Object.assign({}, formInfo), { name: e.currentTarget.value }));
                break;
            case 'email':
                changeFormInfo(Object.assign(Object.assign({}, formInfo), { email: e.currentTarget.value }));
                break;
        }
    };
    /* ========================== Handle Click */
    const handleClick = () => {
        if (users.showUsers) {
            changeUsers({
                users: [],
                showUsers: false
            });
        }
        else {
            changeUsers({
                users: queryData.data.users,
                showUsers: true
            });
        }
    };
    /* ========================== Handle Submit */
    const handleSubmit = (e) => {
        e.preventDefault();
        mutateFunction({
            variables: { name: formInfo.name, email: formInfo.email }
        });
        if (!data) {
            changeAlert({
                show: true,
                message: (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "mr-2" }, { children: "A user with this email already exists" }), void 0)
            });
        }
        else {
            changeAlert({
                show: true,
                message: (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "mr-2" }, { children: "'User created successfully'" }), void 0)
            });
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("form", Object.assign({ className: "bg-white border-2 border-gray-400 text-black", onSubmit: handleSubmit }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "flex flex-wrap" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "w-full md:w-1/2 px-3 mb-6 md:mb-0" }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2", htmlFor: "grid-first-name" }, { children: "Name" }), void 0), (0, jsx_runtime_1.jsx)("input", { className: "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500", id: "firstName", type: "text", onChange: handleChange, placeholder: "Jane", required: true }, void 0), (0, jsx_runtime_1.jsx)("input", { className: "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500", id: "email", type: "email", onChange: handleChange, placeholder: "jdoe@gmail.com", required: true }, void 0), (0, jsx_runtime_1.jsx)("button", Object.assign({ type: "submit", className: "border-2 border-black btn bg-white text-black" }, { children: "Submit" }), void 0), loading ? (0, jsx_runtime_1.jsx)("p", { children: "Adding User" }, void 0) : null, alert.show ? alert.message : null] }), void 0) }), void 0) }), void 0), (0, jsx_runtime_1.jsx)("button", Object.assign({ className: "bg-white border-2 border-gray-400 text-black", onClick: handleClick }, { children: "Show Users" }), void 0), users.showUsers
                ? users.users.map((user) => ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "mt-2 border-2" }, { children: [(0, jsx_runtime_1.jsxs)("p", { children: ["User Name: ", user.name] }, void 0), (0, jsx_runtime_1.jsxs)("p", { children: ["User Id: ", user.id] }, void 0), (0, jsx_runtime_1.jsxs)("p", { children: ["User Email: ", user.email] }, void 0)] }), void 0)))
                : null] }, void 0));
};
exports.default = Test;
