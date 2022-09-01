import { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuid } from 'uuid';



/** Box list: manages items in the box list
 *
 * State:
 * - boxes: array like [ { height, width, backgroundColor, id }, ... ]
 *
 * BoxList -> NewListItemForm
 * BoxList -> Box
 */

function BoxList() {
    const [boxList, setBoxList] = useState([]);

    //function to remove box from List, pass it as prop to Box component
    function removeBox(id) {
        setBoxList(curr =>
            curr.filter(b => b.id !== id));
    }

    //function to add a new box
    function addBox(box) {
        let newBox = { ...box, id: uuid() };
        setBoxList(boxList => [...boxList, newBox]);
    }



    function renderBoxes() {
        return (
            <div>
                <ul>
                    {boxList.map(box =>
                        <li key={box.id} ><Box
                            id={box.id}
                            height={box.height}
                            width={box.width}
                            backgroundColor={box.backgroundColor}
                            removeBox={() => removeBox(box.id)}
                        />
                        </li>)}
                </ul>
            </div >
        );
    }

    //call NewBoxForm (prop height, width, color and addBox function)
    //return call renderBoxes
    return (
        <div className="BoxList">
            <NewBoxForm addBox={addBox} />
            {renderBoxes()}
        </div>
    );
}

export default BoxList;