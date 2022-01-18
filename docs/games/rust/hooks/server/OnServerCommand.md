---
hide_table_of_contents: true
---

# OnServerCommand

## Usage

* Called before a server command is executed on the server
* Return a non-null value to stop command from being executed

## Examples

```csharp title="Game-specific, command blocked and logged, with player check"
object OnServerCommand(ConsoleSystem.Arg arg)
{
    if (arg.cmd.Name.Equals("quit", StringComparison.OrdinalIgnoreCase))
    {
        BasePlayer player = arg.Connection?.player as BasePlayer;
        Puts($"{(player == null ? "Server" : $"{player.displayName} ({player.userID})")} ran command: {arg.cmd.FullName} {arg.FullString}");
        return false;
    }

    return null;
}
```

```csharp title="Game-specific, command logged, with player check"
object OnServerCommand(ConsoleSystem.Arg arg)
{
    BasePlayer player = arg.Connection?.player as BasePlayer;
    Puts($"{(player == null ? "Server" : $"{player.displayName} ({player.userID})")} ran command: {arg.cmd.FullName} {arg.FullString}");

    return null;
}
```
