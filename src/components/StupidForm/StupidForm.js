import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {actions} from './StupidForm.redux';
import Select from './Select';
import Text from './Text';
import Radio from './Radio';
import {Col, Row} from 'antd';

const StupidForm = () => {
    const dispatch = useDispatch();
    const stuff = useSelector(state => state.stupidform.form);

    useEffect(() => {
        const defaultValues = stuff.reduce((acc, current) => {
            acc[current.key] = current.defaultValue === undefined 
                ? ''
                : current.defaultValue;

            return acc;
        }, {});
        dispatch(actions.setValue(defaultValues));
    }, [dispatch, stuff]);

    useEffect(() => {
        dispatch(actions.getForm());
    }, [dispatch]);

    return (
        <form>
            <Row gutter={[16,16]}>
                {stuff.map((element) => {
                    switch (element.type) {
                        case 'select':
                            return (
                                <Col 
                                    key={element.key}
                                    {...element.grid}
                                >
                                    <Select {...element} dataKey={element.key} />
                                </Col>
                            );

                        case 'text':
                            return (
                                <Col 
                                    key={element.key}
                                    {...element.grid}
                                >
                                    <Text {...element} dataKey={element.key}></Text>
                                </Col>
                            );
                        
                        case 'radio':
                            console.log(element.grid);
                            return (
                                <Col 
                                    key={element.key}
                                    {...element.grid}
                                >
                                    <Radio {...element} dataKey={element.key}></Radio>
                                </Col>
                            );

                        default:
                            return <div key={element.key}>Get Fucked</div>;
                    }
                })}
            </Row>
        </form>
    )
}

export default StupidForm;