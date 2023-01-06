const Container = ({ children, bgColor, ...otherprops }) => (
  <div className={`py-20 sm:py-24 lg:py-32 ${bgColor ? 'bgLight' : ''}`}>
    {' '}
    <div className="mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-20">
      {children}
    </div>
  </div>
)

export default Container
