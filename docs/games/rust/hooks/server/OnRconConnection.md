---
hide_table_of_contents: true
---

# OnRconConnection

## Usage

* Called before an RCON connection attempt is made
* Return a non-null value to stop connection from being made

## Examples

```csharp title="Block and log connection attempt"
void OnRconConnection(IPAddress ipAddress)
{
    if (remoteIp.Equals("127.0.0.1", StringComparison.OrdinalIgnoreCase))
    {
        Puts($"Blocked RCON connection from {ipAddress}");
        return false;
    }

    return null;
}
```

```csharp title="Allow and log connection attempt"
void OnRconConnection(IPAddress ipAddress)
{
    Puts($"Allowed RCON connection from {remoteIp}");
}
```
