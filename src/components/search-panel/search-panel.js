import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Tag from '../tag/tag.js';

const SearchPanel=()=>{
    return(<Form className="mt-3">
                <Form.Group>
                    <Form.Control size="lg" type="text" placeholder="Enter tags"/>
                </Form.Group>
                <div className="m-2">
                    <Tag/>
                </div>
                <div className="text-center">
                    <Button variant="primary" size="lg">
                        Search
                    </Button>
                </div>
            </Form>);
}

export default SearchPanel;