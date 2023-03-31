import React from 'react';

const Questions = () => {
    return (
        <div className='border-2 p-2 md:p-4 rounded-xl mb-5'>
            <h2 className='font-semibold text-2xl md:text-3xl text-[#6047EC]'>What is Props vs state?</h2>
            <p className='text-xl text-justify pl-6 my-4'>Props are used to pass data from a parent component to a child component, while state is used to manage data within a component itself.</p>
            <h2 className='font-semibold text-2xl md:text-3xl text-[#6047EC]'>How does useState work?</h2>
            <p className='text-xl text-justify pl-6 my-4'>useState works by creating a state variable and a function to update it, which can be used in your component's JSX code to manage state changes. Whenever the state is updated, the component will re-render to reflect the new state value.</p>
            <h2 className='font-semibold text-2xl md:text-3xl text-[#6047EC]'>Purpose of useEffect other than fetching data?</h2>
            <p className='text-xl text-justify pl-6 my-4'>useEffect is a versatile hook that can be used for many different purposes beyond fetching data. It allows you to respond to events, update the state of your component, and schedule actions to happen in the future.</p>
            <h2 className='font-semibold text-2xl md:text-3xl text-[#6047EC]'>How Does React work?</h2>
            <p className='text-xl text-justify pl-6 my-4'>React provides a declarative way to build UIs by defining components and managing their state and props. It uses a virtual DOM to efficiently update the UI and provides a rich set of tools for handling user events and managing component communication.</p>
        </div>
    );
};

export default Questions;