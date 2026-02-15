function Message() {
    const name = "Gellért";
    if (name)
        return <h1>Hello word {name}</h1>; //creatElement stb
    return <h1>hello word</h1>
}
export default Message; //function meghívas