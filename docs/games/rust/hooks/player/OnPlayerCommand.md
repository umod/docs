---
hide_table_of_contents: true
---

# OnPlayerCommand

## Usage

* Useful for intercepting players' commands before their handling
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnPlayerCommand(BasePlayer player, string command, string[] args)
{
    Puts("OnPlayerCommand works!");
    return null;
}
```
