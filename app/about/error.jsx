'use client';

export default function Error({ error, reset }) {
    return (
        <div>
            This isn't loading up: {error.message}
            <button onClick={() => reset()}>reset</button>
        </div>
    );
}
