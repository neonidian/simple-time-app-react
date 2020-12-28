import {render} from '@testing-library/react';
import TimeBasedOnIpAddress from './TimeBasedOnIpAddress';

test('renders a section of the page with "Loading..." text when the page is first mounted', () => {
    const {getByTestId} = render(<TimeBasedOnIpAddress />);
    const headerElement = getByTestId('time-ip-address');
    expect(headerElement.textContent).toBe('Loading...')
});
