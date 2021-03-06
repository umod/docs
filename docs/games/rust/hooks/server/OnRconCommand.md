---
hide_table_of_contents: true
---

# OnRconCommand

## Usage

* Called before a server command from RCON is executed on the server
* Return a non-null value to stop command from being executed

## Examples

```csharp title="Block and log command usage"
object OnRconCommand(IPAddress ipAddress, string command, string[] args)
{
    if (command.Equals("quit", StringComparison.OrdinalIgnoreCase))
    {
        Puts($"Blocked RCON command from {ipAddress}: {command} {(args != null ? string.Join(" ", args) : "")}");
        return false;
    }

    return null;
}
```

```csharp title="Allow and log command usage"
void OnRconCommand(IPAddress ipAddress, string command, string[] args)
{
    Puts($"Executed RCON command from {ipAddress}: {command} {(args != null ? string.Join(" ", args) : "")}");
}
```
