defmodule Inmana.Mailer do
  @moduledoc """
    Informs the application to use Bamboo mailer
  """

  use Bamboo.Mailer, otp_app: :inmana
end
