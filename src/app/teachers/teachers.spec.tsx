import { render } from '@testing-library/react';

import Teachers from './teachers';

describe('Teachers', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Teachers />);
    expect(baseElement).toBeTruthy();
  });
});
