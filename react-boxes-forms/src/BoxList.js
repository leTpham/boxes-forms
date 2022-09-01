import { useState } from 'react';
import Box from './Box';
import { v4 as uuid } from 'uuid';

function BoxList() {
    const [boxList, setBoxList] = useState([{
        height: "200px",
        width: "200px",
        backgroundColor: 'red',
        id: uuid()
    }]);



    function renderBoxes(boxList) {
        return (
            <div>
                <ul>
                    {boxList.map(box =>
                        <li><Box
                            height={box.height}
                            width={box.width}
                            backgroundColor={box.backgroundColor} />
                        </li>)}
                </ul>
            </div >
        );
    }


}