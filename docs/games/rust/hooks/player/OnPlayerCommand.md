---
hide_table_of_contents: true
---

# OnPlayerCommand

## Usage

* Useful for intercepting players' commands before their handling
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnPlayerCommand(BasePlayer player, string command, string[] args)
{
    Puts("OnPlayerCommand works!");
    return null;
}
```
