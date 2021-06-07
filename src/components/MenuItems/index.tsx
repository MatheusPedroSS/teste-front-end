import { ButtonBase } from '@material-ui/core';
import React, { Component } from 'react';
import { ButtonB, Text } from './style';

interface Props {
    id: number
    text: string
    selected?: boolean
    clicked?(id: number, bool: boolean): void
}

class MenuItem extends Component<Props> {
    constructor(props: Props){
        super(props)
        this.state = {
            id: props.id,
            selected: props.selected
        }
    }
    render() {
        const onAction = () => {
            if(this.props.clicked !== undefined) {
                this.props.clicked(this.props.id, !this.props.selected)
            }
        }

        return(
            <ButtonB style={{color: (this.props.selected ? '#82ca9d' : '#f3f3f3')}}>
                <ButtonBase disableTouchRipple={true} style={{width: '100%'}} onClick={onAction}>
                        <Text>
                            {this.props.text}
                        </Text>
                </ButtonBase>
            </ButtonB>
        );
    }
}

export default MenuItem;