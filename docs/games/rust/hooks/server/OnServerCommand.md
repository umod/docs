---
hide_table_of_contents: true
---

# OnServerCommand

## Usage

* Called before a server command is executed on the server
* Return a non-null value to stop command from being executed

## Examples

```csharp title="Block and log command usage"
object OnServerCommand(ConsoleSystem.Arg arg)
{
    if (arg.cmd.Name.Equals("quit", StringComparison.OrdinalIgnoreCase))
    {
        BasePlayer player = arg.Connection?.player as BasePlayer;
        Puts($"Blocked server command{(player != null ? $" from {player.displayName} ({player.userID})" : string.Empty)}: {arg.cmd.FullName} {arg.FullString}");
        return false;
    }

    return null;
}
```

```csharp title="Allow and log command usage"
void OnServerCommand(ConsoleSystem.Arg arg)
{
    BasePlayer player = arg.Connection?.player as BasePlayer;
    Puts($"Executed server command{(player != null ? $" from {player.displayName} ({player.userID})" : string.Empty)}: {arg.cmd.FullName} {arg.FullString}");
}
```
