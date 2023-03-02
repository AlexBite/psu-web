import { render } from '@testing-library/react';

import TeacherCard from './teacher-card';

describe('TeacherCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TeacherCard />);
    expect(baseElement).toBeTruthy();
  });
});
