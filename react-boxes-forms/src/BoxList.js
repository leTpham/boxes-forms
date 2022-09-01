import { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm'
import { v4 as uuid } from 'uuid';

function BoxList() {
    const [boxList, setBoxList] = useState([{
        height: "200",
        width: "200",
        backgroundColor: 'red',
        id: uuid()
    }]);

    //TODO: function to remove box from List, pass it as prop to Box component
    function removeBox() {

    }

    //TODO: function to add a new box
    function addBox(box) {
        let newBox = { ...box, id: uuid() };
        setBoxList(boxList => [...boxList, newBox]);
    }



    function renderBoxes() {
        return (
            <div>
                <ul>
                    {boxList.map(box =>
                        <li key={box.id}><Box
                            height={box.height}
                            width={box.width}
                            backgroundColor={box.backgroundColor}
                            removeBox={removeBox} />
                        </li>)}
                </ul>
            </div >
        );
    }

    //TODO: call NewBoxForm (prop height, width, color and addBox function)
    //return call renderBoxes
    return (
        <div className="BoxList">
            <NewBoxForm addBox={addBox} />
            {renderBoxes()}
        </div>
    );
}

export default BoxList;