import * as React from 'react';
import { TabContent } from 'components/TabContentPresenter';
import styled from 'styled-components';
import { Body } from 'components/Body';
import { H5 } from 'components/H5';

const StyledTabContent = styled(TabContent)`
  max-width: 715px;
`;

export const OverviewTabContent: React.FunctionComponent<{ 'data-tab-id': string }> = (props) => {
  return (
    <StyledTabContent {...props}>
      <Body>
        Типографика помогает создавать отчетливую иерархию элементов на странице, упорядочивать информацию и управлять
        вниманием пользователя.
      </Body>
      <H5>Базовый шрифт</H5>
      <Body>
        Набор стилей в дизайн-системе банка ВТБ представлен шрифтом VTB Group UI. Это фирменный шрифт разработанный
        специально для банка. Шрифт прекрасно адаптирован для использования в web-среде и хорошо читается в маленьких
        размерах. Скачать шрифт можно по ссылке:
      </Body>
      <H5>Размерности шрифта</H5>
      <Body>
        Размеры подобраны таким образом, что бы иметь возможность работать в условиях любой плотности интерфейсов, от
        очень маленьких таблиц до просторных лендингов и промосайтов.
      </Body>
    </StyledTabContent>
  );
};
