@extends('master')

@section('content')
    <project-details-show
        :project-detailed="{{ json_encode($projectDetailed) }}"
    >
    </project-details-show>
@endsection