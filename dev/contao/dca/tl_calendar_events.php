<?php

// Link Picker in Text Elementen


use Contao\CoreBundle\DataContainer\PaletteManipulator;

PaletteManipulator::create()

    ->addField('subtitle', 'title_legend', PaletteManipulator::POSITION_APPEND)
    ->addField('kennnummer', 'title_legend', PaletteManipulator::POSITION_APPEND)

    ->applyToPalette('default', 'tl_calendar_events');

$GLOBALS['TL_DCA']['tl_calendar_events']['fields']['subtitle'] = [
    'label'                   => ['Unterüberschrift', 'Fügt eine kleinere, zweite Unterschrift unter der Normalen hinzu'],
    'search'                  => true,
    'inputType'               => 'text',
    'eval'                    => ['maxlength'=>255, 'tl_class'=>'w50'],
    'sql'                     => "varchar(255) NOT NULL default ''"

];

$GLOBALS['TL_DCA']['tl_calendar_events']['fields']['kennnummer'] = [
    'label'                   => ['Kennung', 'Fügt die 8 Zeichen lange Kennung hinzu'],
    'search'                  => true,
    'inputType'               => 'text',
    'mandatory'               => true,
    'eval'                    => ['maxlength'=>8, 'tl_class'=>'w50'],
    'sql'                     => "varchar(8) NOT NULL default ''"

];