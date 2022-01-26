---
hide_table_of_contents: true
---

# OnServerShutdown

## Usage

* Called before the server shuts down
* No return behavior

## Examples

```csharp
void OnServerShutdown()
{
    Puts($"Server shutdown initiated at {DateTime.Now}");
}
```
