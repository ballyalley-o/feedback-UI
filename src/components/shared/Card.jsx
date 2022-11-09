import PropTypes from 'prop-types';

function Card({ children, reverse }) {
//   return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;

return (
    <div
    className='card'
    style={{
        backgroundColor: reverse ? 'var(--dark)' : 'var(--light)',
        color: reverse ? 'var(--light)' : 'var(--dark)',
    }}
    >
    {children}
    </div>
    )

}

Card.defaultProps = {
    reverse: false,
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}

export default Card