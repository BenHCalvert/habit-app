import React from 'react';
import { Container, Button, Link } from 'react-floating-action-button';

export function ActionBtn() {
    return (
        <Container>
            <Link href="#"
                tooltip="Add Habit"
                icon="far fa-sticky-note" />
            <Link href="#"
                tooltip="Add Reward"
                icon="far fa-sticky-note" />
                className="fab-item btn btn-link btn-lg text-white"
            <Button
                tooltip="The big plus button!"
                icon="fas fa-plus"
                rotate={true}
                onClick={() => alert('FAB Rocks!')} />
        </Container>
    )
}

export default ActionBtn;