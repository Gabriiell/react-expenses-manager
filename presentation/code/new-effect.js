const Example = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`You clicked ${count} times`);

        return () => {
            console.log(`Component will be destroyed with ${count} clicks`);
        };
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
        </button>
        </div>
    );
}
