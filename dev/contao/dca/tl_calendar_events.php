<?php

// Link Picker in Text Elementen


use Contao\CoreBundle\DataContainer\PaletteManipulator;

PaletteManipulator::create()

    ->addField('subtitle', 'title_legend', PaletteManipulator::POSITION_APPEND)

    ->applyToPalette('default', 'tl_calendar_events')
    ;

$GLOBALS['TL_DCA']['tl_calendar_events']['fields']['subtitle'] = [
    'label'                   => "Unterüberschrift",
    'search'                  => true,
    'explanation'             => "Text der unter der Hauptüberschrift angezeigt wird",
    'inputType'               => 'text',
    'eval'                    => ['maxlength'=>255, 'tl_class'=>'w50'],
    'sql'                     => "varchar(255) NOT NULL default ''"

];