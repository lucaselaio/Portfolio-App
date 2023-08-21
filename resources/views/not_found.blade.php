@extends('master')

@section('content')
    <not-found
        error-message="{{ $error ? $error : '' }}"
    >
    </not-found>
@endsection